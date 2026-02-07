using Microsoft.AspNetCore.Mvc.RazorPages;

public class SimpleData : PageModel
{
    public int UserAge { get; set; }
    public string UserName { get; set; } = string.Empty;
    public bool IsAdmin { get; set; }
    public DateOnly CurrentDate { get; set; }
    public DateTime TimeStamp { get; set; }
    public List<string> Skills { get; set; } = new();
    public string UserEmail { get; set; } = string.Empty;

    public void OnGet()
    {
        UserAge = 19;                    
        UserName = "Олег";
        IsAdmin = true;
        CurrentDate = DateOnly.FromDateTime(DateTime.Today);
        TimeStamp = DateTime.UtcNow;
        UserEmail = "oleg@example.com";
        
        Skills = new List<string> 
        { 
            "C#", "ASP.NET Core", "Razor Pages", "SQL", "Trochu JavaScript" 
        };
    }
}