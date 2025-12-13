using testlea.Models.Chat;

namespace testlea.Services;

public class FreeAIChatService
{
    private readonly IConfiguration _config;
    private readonly ILogger<FreeAIChatService> _logger;
    private readonly KnowledgeBaseService _knowledgeBase;

    public FreeAIChatService(IConfiguration config, ILogger<FreeAIChatService> logger, KnowledgeBaseService knowledgeBase)
    {
        _config = config;
        _logger = logger;
        _knowledgeBase = knowledgeBase;
    }

    public async Task<string> GenerateResponseAsync(string userMessage, List<ChatMessage> conversationHistory)
    {
        try
        {
            var relevantKnowledge = await _knowledgeBase.SearchRelevantAsync(userMessage);
            return GenerateMockResponse(userMessage, relevantKnowledge);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error generating AI response");
            return "I'm experiencing technical difficulties. Please try again.";
        }
    }

    private string GenerateMockResponse(string userMessage, List<KnowledgeBaseEntry> knowledge)
    {
        var lowerMessage = userMessage.ToLower();

        if (knowledge.Any())
        {
            var bestMatch = knowledge.First();
            return $"{bestMatch.Answer}\n\nIs there anything else you'd like to know?";
        }

        if (lowerMessage.Contains("task") && lowerMessage.Contains("create"))
        {
            return "To create a new task:\n\n1. Navigate to your project dashboard\n2. Click the 'Add Task' button\n3. Fill in task details (title, description, assignee, deadline)\n4. Click 'Save'\n\nThe assignee will receive a notification. Need help with anything else?";
        }

        if (lowerMessage.Contains("hello") || lowerMessage.Contains("hi"))
        {
            return "Hello! I'm your AI assistant for project management. I can help you with tasks, deadlines, reports, and team collaboration. What would you like help with?";
        }

        return "I'd be happy to help! I can assist you with:\n\n• Task Management\n• Deadlines\n• Reports\n• Team Collaboration\n\nWhat would you like to do?";
    }
}