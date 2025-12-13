namespace testlea.DTOs.Chat;

public class SendMessageRequest
{
    public string? ConversationId { get; set; }
    public string Content { get; set; } = string.Empty;
    public List<AttachmentDto>? Attachments { get; set; }
}

public class AttachmentDto
{
    public string Type { get; set; } = "file";
    public string Name { get; set; } = string.Empty;
    public string Url { get; set; } = string.Empty;
    public long Size { get; set; }
    public string MimeType { get; set; } = string.Empty;
}

public class ChatResponse
{
    public string MessageId { get; set; } = string.Empty;
    public string ConversationId { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
}

public class ConversationResponse
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public DateTime CreatedAt { get; set; }
    public DateTime UpdatedAt { get; set; }
    public string LastMessage { get; set; } = string.Empty;
}

public class ConversationHistoryResponse
{
    public string ConversationId { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public List<MessageDto> Messages { get; set; } = new();
}

public class MessageDto
{
    public string Id { get; set; } = string.Empty;
    public string Role { get; set; } = string.Empty;
    public string Content { get; set; } = string.Empty;
    public List<AttachmentDto>? Attachments { get; set; }
    public DateTime CreatedAt { get; set; }
}

public class PopularActionResponse
{
    public string Id { get; set; } = string.Empty;
    public string Title { get; set; } = string.Empty;
    public string Icon { get; set; } = string.Empty;
    public string Prompt { get; set; } = string.Empty;
}