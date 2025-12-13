using System.Text;
using System.Text.Json;
using testlea.Models.Chat;

namespace testlea.Services;

public class AIChatService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _config;
    private readonly ILogger<AIChatService> _logger;
    private readonly KnowledgeBaseService _knowledgeBase;

    public AIChatService(IConfiguration config, ILogger<AIChatService> logger, KnowledgeBaseService knowledgeBase)
    {
        _config = config;
        _logger = logger;
        _knowledgeBase = knowledgeBase;
        _httpClient = new HttpClient();
        
        var apiKey = _config["OpenAI:ApiKey"];
        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {apiKey}");
    }

    public async Task<string> GenerateResponseAsync(string userMessage, List<ChatMessage> conversationHistory)
    {
        try
        {
            var relevantKnowledge = await _knowledgeBase.SearchRelevantAsync(userMessage);
            var systemPrompt = BuildSystemPrompt(relevantKnowledge);
            var messages = BuildMessageHistory(systemPrompt, conversationHistory, userMessage);

            var requestBody = new
            {
                model = "gpt-4-turbo-preview",
                messages = messages,
                temperature = 0.7,
                max_tokens = 1000
            };

            var jsonContent = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync("https://api.openai.com/v1/chat/completions", content);
            response.EnsureSuccessStatusCode();

            var responseBody = await response.Content.ReadAsStringAsync();
            var jsonResponse = JsonDocument.Parse(responseBody);
            
            var assistantMessage = jsonResponse.RootElement
                .GetProperty("choices")[0]
                .GetProperty("message")
                .GetProperty("content")
                .GetString();

            return assistantMessage ?? "I apologize, but I couldn't generate a response. Please try again.";
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating AI response");
            return "I'm experiencing technical difficulties. Please try again in a moment.";
        }
    }

    private string BuildSystemPrompt(List<KnowledgeBaseEntry> knowledge)
    {
        var sb = new StringBuilder();
        sb.AppendLine("You are LeaHub Intelligence, an AI assistant for the LeaHub project management platform.");
        sb.AppendLine("You help users with tasks, project management, deadlines, and team collaboration.");
        sb.AppendLine();
        sb.AppendLine("IMPORTANT RULES:");
        sb.AppendLine("- Only answer questions related to project management, tasks, deadlines, and the LeaHub platform");
        sb.AppendLine("- If asked about unrelated topics, politely redirect to project management topics");
        sb.AppendLine("- Be concise and professional");
        sb.AppendLine("- Use the knowledge base information when relevant");
        sb.AppendLine();
        
        if (knowledge.Any())
        {
            sb.AppendLine("KNOWLEDGE BASE:");
            foreach (var entry in knowledge)
            {
                sb.AppendLine($"Q: {entry.Question}");
                sb.AppendLine($"A: {entry.Answer}");
                sb.AppendLine();
            }
        }

        sb.AppendLine("Available features:");
        sb.AppendLine("- Task management: create, update, track tasks");
        sb.AppendLine("- Deadline tracking: monitor upcoming deadlines");
        sb.AppendLine("- Project reports: generate progress summaries");
        sb.AppendLine("- Team collaboration: facilitate communication");

        return sb.ToString();
    }

    private List<object> BuildMessageHistory(string systemPrompt, List<ChatMessage> history, string currentMessage)
    {
        var messages = new List<object>
        {
            new { role = "system", content = systemPrompt }
        };

        foreach (var msg in history.TakeLast(50))
        {
            messages.Add(new { role = msg.Role, content = msg.Content });
        }

        messages.Add(new { role = "user", content = currentMessage });

        return messages;
    }
}