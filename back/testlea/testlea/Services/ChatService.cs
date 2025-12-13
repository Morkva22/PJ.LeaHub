using testlea.DTOs.Chat;
using testlea.Models.Chat;

namespace testlea.Services;

public class ChatService
{
    private readonly GroqAIChatService _aiService;
    private readonly ILogger<ChatService> _logger;
    
    // 💾 Храним все в памяти
    private static readonly Dictionary<string, Conversation> _conversations = new();
    private static readonly Dictionary<string, List<ChatMessage>> _messages = new();

    public ChatService(IConfiguration config, ILogger<ChatService> logger, GroqAIChatService aiService)
    {
        _logger = logger;
        _aiService = aiService;
    }

    public async Task<ChatResponse> SendMessageAsync(string userId, SendMessageRequest request)
    {
        try
        {
            _logger.LogInformation($"📨 Processing message for user {userId}");

            // Создаем или получаем conversation
            string conversationId = request.ConversationId ?? CreateConversation(userId, request.Content);

            // Сообщение пользователя
            var userMessage = new ChatMessage
            {
                Id = Guid.NewGuid().ToString(),
                ConversationId = conversationId,
                UserId = userId,
                Role = "user",
                Content = request.Content,
                CreatedAt = DateTime.UtcNow
            };

            SaveMessage(conversationId, userMessage);

            // Получаем историю
            var history = GetMessages(conversationId);
            
            _logger.LogInformation($"🤖 Generating AI response...");
            
            // Генерируем ответ
            var aiResponse = await _aiService.GenerateResponseAsync(request.Content, history);
            
            _logger.LogInformation($"✅ AI response: {aiResponse?.Substring(0, Math.Min(50, aiResponse?.Length ?? 0))}...");

            // Сообщение AI
            var assistantMessage = new ChatMessage
            {
                Id = Guid.NewGuid().ToString(),
                ConversationId = conversationId,
                UserId = "assistant",
                Role = "assistant",
                Content = aiResponse,
                CreatedAt = DateTime.UtcNow
            };

            SaveMessage(conversationId, assistantMessage);
            UpdateConversationTitle(conversationId, request.Content);

            return new ChatResponse
            {
                MessageId = assistantMessage.Id,
                ConversationId = conversationId,
                Content = aiResponse,
                CreatedAt = assistantMessage.CreatedAt
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "❌ Error sending message");
            throw;
        }
    }

    public async Task<ChatResponse> SendMessageWithFilesAsync(string userId, string content, string? conversationId, List<IFormFile>? files)
    {
        try
        {
            _logger.LogInformation($"📎 Processing message with files");

            conversationId = conversationId ?? CreateConversation(userId, content ?? "Files");

            var attachments = new List<ChatAttachment>();

            if (files != null && files.Any())
            {
                var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
                Directory.CreateDirectory(uploadPath);

                foreach (var file in files)
                {
                    var fileName = $"{Guid.NewGuid()}_{file.FileName}";
                    var filePath = Path.Combine(uploadPath, fileName);

                    using (var stream = new FileStream(filePath, FileMode.Create))
                    {
                        await file.CopyToAsync(stream);
                    }

                    attachments.Add(new ChatAttachment
                    {
                        Name = file.FileName,
                        Url = $"/uploads/{fileName}",
                        Size = file.Length,
                        MimeType = file.ContentType,
                        Type = GetFileType(file.ContentType)
                    });
                }
            }

            var userMessage = new ChatMessage
            {
                Id = Guid.NewGuid().ToString(),
                ConversationId = conversationId,
                UserId = userId,
                Role = "user",
                Content = content ?? "[Files]",
                Attachments = attachments,
                CreatedAt = DateTime.UtcNow
            };

            SaveMessage(conversationId, userMessage);

            var history = GetMessages(conversationId);
            var contentWithFiles = content ?? "";
            if (attachments.Any())
            {
                contentWithFiles += $"\n[{attachments.Count} files: {string.Join(", ", attachments.Select(a => a.Name))}]";
            }

            var aiResponse = await _aiService.GenerateResponseAsync(contentWithFiles, history);

            var assistantMessage = new ChatMessage
            {
                Id = Guid.NewGuid().ToString(),
                ConversationId = conversationId,
                UserId = "assistant",
                Role = "assistant",
                Content = aiResponse,
                CreatedAt = DateTime.UtcNow
            };

            SaveMessage(conversationId, assistantMessage);
            UpdateConversationTitle(conversationId, content ?? "Files");

            return new ChatResponse
            {
                MessageId = assistantMessage.Id,
                ConversationId = conversationId,
                Content = aiResponse,
                CreatedAt = assistantMessage.CreatedAt
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "❌ Error with files");
            throw;
        }
    }

    public Task<List<ConversationResponse>> GetUserConversationsAsync(string userId)
    {
        var result = _conversations.Values
            .Where(c => c.UserId == userId)
            .OrderByDescending(c => c.UpdatedAt)
            .Select(c => new ConversationResponse
            {
                Id = c.Id,
                Title = c.Title,
                CreatedAt = c.CreatedAt,
                UpdatedAt = c.UpdatedAt,
                LastMessage = GetLastMessage(c.Id)
            })
            .ToList();

        return Task.FromResult(result);
    }

    public Task<ConversationHistoryResponse> GetConversationDetailsAsync(string conversationId, string userId)
    {
        if (!_conversations.ContainsKey(conversationId))
            throw new KeyNotFoundException("Conversation not found");

        var conv = _conversations[conversationId];
        var msgs = GetMessages(conversationId);

        return Task.FromResult(new ConversationHistoryResponse
        {
            ConversationId = conversationId,
            Title = conv.Title,
            Messages = msgs.Select(m => new MessageDto
            {
                Id = m.Id,
                Role = m.Role,
                Content = m.Content,
                Attachments = m.Attachments?.Select(a => new AttachmentDto
                {
                    Type = a.Type,
                    Name = a.Name,
                    Url = a.Url,
                    Size = a.Size,
                    MimeType = a.MimeType
                }).ToList(),
                CreatedAt = m.CreatedAt
            }).ToList()
        });
    }

    public Task DeleteConversationAsync(string conversationId, string userId)
    {
        if (_conversations.ContainsKey(conversationId))
        {
            var conv = _conversations[conversationId];
            if (conv.UserId == userId)
            {
                _conversations.Remove(conversationId);
                _messages.Remove(conversationId);
            }
        }
        return Task.CompletedTask;
    }

    // ==================== PRIVATE ====================

    private string CreateConversation(string userId, string title)
    {
        var id = Guid.NewGuid().ToString();
        _conversations[id] = new Conversation
        {
            Id = id,
            UserId = userId,
            Title = title?.Length > 50 ? title.Substring(0, 50) : title ?? "New Chat",
            CreatedAt = DateTime.UtcNow,
            UpdatedAt = DateTime.UtcNow
        };
        _messages[id] = new List<ChatMessage>();
        _logger.LogInformation($" Created conversation: {id}");
        return id;
    }

    private void SaveMessage(string conversationId, ChatMessage message)
    {
        if (!_messages.ContainsKey(conversationId))
            _messages[conversationId] = new List<ChatMessage>();

        _messages[conversationId].Add(message);

        if (_conversations.ContainsKey(conversationId))
            _conversations[conversationId].UpdatedAt = DateTime.UtcNow;
    }

    private List<ChatMessage> GetMessages(string conversationId)
    {
        return _messages.ContainsKey(conversationId)
            ? _messages[conversationId].OrderBy(m => m.CreatedAt).ToList()
            : new List<ChatMessage>();
    }

    private string GetLastMessage(string conversationId)
    {
        var msgs = GetMessages(conversationId);
        var last = msgs.LastOrDefault();
        if (last == null) return "";

        var preview = last.Content.Length > 50 ? last.Content.Substring(0, 50) + "..." : last.Content;
        return $"{(last.Role == "user" ? "You" : "AI")}: {preview}";
    }

    private void UpdateConversationTitle(string conversationId, string text)
    {
        if (_conversations.ContainsKey(conversationId))
        {
            var conv = _conversations[conversationId];
            if (conv.Title == "New Chat" && !string.IsNullOrEmpty(text))
            {
                conv.Title = text.Length > 50 ? text.Substring(0, 50) : text;
                conv.UpdatedAt = DateTime.UtcNow;
            }
        }
    }

    private string GetFileType(string mimeType)
    {
        if (mimeType.StartsWith("image/")) return "image";
        if (mimeType.StartsWith("video/")) return "video";
        if (mimeType.StartsWith("audio/")) return "audio";
        if (mimeType == "application/pdf") return "pdf";
        return "file";
    }
}