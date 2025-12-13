using System.Text;
using System.Text.Json;
using testlea.Models.Chat;

namespace testlea.Services;

public class GroqAIChatService
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _config;
    private readonly ILogger<GroqAIChatService> _logger;
    private readonly KnowledgeBaseService _knowledgeBase;
    private readonly string _apiKey;
    private readonly string _model;
    private readonly string _baseUrl;

    public GroqAIChatService(IConfiguration config, ILogger<GroqAIChatService> logger, KnowledgeBaseService knowledgeBase)
    {
        _config = config;
        _logger = logger;
        _knowledgeBase = knowledgeBase;
        _httpClient = new HttpClient();

        _apiKey = _config["Groq:ApiKey"] ?? throw new Exception("Groq API key not found");
        _model = _config["Groq:Model"] ?? "llama-3.3-70b-versatile";
        _baseUrl = _config["Groq:BaseUrl"] ?? "https://api.groq.com/openai/v1";

        _httpClient.DefaultRequestHeaders.Add("Authorization", $"Bearer {_apiKey}");
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
                model = _model,
                messages = messages,
                temperature = 0.7,
                max_tokens = 1000,
                top_p = 1,
                stream = false
            };

            var jsonContent = JsonSerializer.Serialize(requestBody);
            var content = new StringContent(jsonContent, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync($"{_baseUrl}/chat/completions", content);
            
            if (!response.IsSuccessStatusCode)
            {
                var errorContent = await response.Content.ReadAsStringAsync();
                _logger.LogError($"Groq API error: {response.StatusCode} - {errorContent}");
                return "I'm experiencing technical difficulties. Please try again in a moment.";
            }

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
            _logger.LogError(ex, "Error generating AI response with Groq");
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
        sb.AppendLine("- Focus on project management, tasks, deadlines, and the LeaHub platform");
        sb.AppendLine("- If asked about unrelated topics, politely redirect to project management topics");
        sb.AppendLine("- Be concise, professional, and helpful");
        sb.AppendLine("- Use the knowledge base information when relevant");
        sb.AppendLine("- Provide actionable advice and clear steps");
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
        sb.AppendLine();
        sb.AppendLine("Always be helpful and provide specific, actionable guidance.");

        return sb.ToString();
    }

    private List<object> BuildMessageHistory(string systemPrompt, List<ChatMessage> history, string currentMessage)
    {
        var messages = new List<object>
        {
            new { role = "system", content = systemPrompt }
        };

        foreach (var msg in history.TakeLast(10))
        {
            var role = msg.Role == "assistant" ? "assistant" : "user";
            messages.Add(new { role = role, content = msg.Content });
        }

        messages.Add(new { role = "user", content = currentMessage });

        return messages;
    }
}