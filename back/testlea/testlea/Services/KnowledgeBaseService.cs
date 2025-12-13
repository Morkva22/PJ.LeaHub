using testlea.Models.Chat;

namespace testlea.Services;

public class KnowledgeBaseService
{
    private readonly List<KnowledgeBaseEntry> _knowledgeBase;

    public KnowledgeBaseService()
    {
        _knowledgeBase = InitializeKnowledgeBase();
    }

    public async Task<List<KnowledgeBaseEntry>> SearchRelevantAsync(string query)
    {
        await Task.CompletedTask;
        
        var keywords = ExtractKeywords(query.ToLower());
        
        var relevant = _knowledgeBase
            .Where(entry => 
                entry.Keywords.Any(k => keywords.Contains(k.ToLower())) ||
                entry.Question.ToLower().Contains(query.ToLower()) ||
                keywords.Any(kw => entry.Question.ToLower().Contains(kw)))
            .OrderByDescending(e => e.Priority)
            .Take(3)
            .ToList();

        return relevant;
    }

    private List<string> ExtractKeywords(string text)
    {
        var stopWords = new HashSet<string> { "how", "what", "when", "where", "why", "is", "are", "the", "a", "an", "can", "do", "does" };
        
        return text.Split(' ', StringSplitOptions.RemoveEmptyEntries)
            .Where(word => word.Length > 3 && !stopWords.Contains(word))
            .ToList();
    }

    private List<KnowledgeBaseEntry> InitializeKnowledgeBase()
    {
        return new List<KnowledgeBaseEntry>
        {
            new KnowledgeBaseEntry
            {
                Question = "How do I create a new task?",
                Answer = "To create a new task, navigate to your project, click the 'Add Task' button, fill in the task details including title, description, assignee, and deadline, then click 'Save'.",
                Keywords = new List<string> { "create", "task", "new", "add" },
                Category = "tasks",
                Priority = 10
            },
            new KnowledgeBaseEntry
            {
                Question = "How can I view upcoming deadlines?",
                Answer = "You can view all upcoming deadlines by clicking on the calendar icon in the main navigation, or ask me to 'Show upcoming deadlines' and I'll generate a summary for you.",
                Keywords = new List<string> { "deadline", "upcoming", "view", "calendar", "due" },
                Category = "deadlines",
                Priority = 9
            },
            new KnowledgeBaseEntry
            {
                Question = "How do I generate a project progress report?",
                Answer = "To generate a project progress report, select your project, go to Reports section, choose 'Progress Report', select the date range, and click 'Generate'. You can also ask me to create one for you.",
                Keywords = new List<string> { "report", "progress", "project", "generate" },
                Category = "reports",
                Priority = 8
            }
        };
    }
}