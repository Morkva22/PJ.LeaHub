using Microsoft.AspNetCore.Mvc.RazorPages;

namespace InversionOfControl.Pages
{
    public class IndexModel : PageModel
    {
        public string UserName { get; set; }
        public DateOnly BirthDate { get; set; }
        public int UserAge { get; set; }
        public bool IsAdmin { get; set; }
        public DateTime CreationTime { get; set; }

        public void OnGet()
        {
            UserName = "John Smith";
            BirthDate = new DateOnly(1995, 3, 15);
            
            var today = DateOnly.FromDateTime(DateTime.Now);
            UserAge = today.Year - BirthDate.Year;
            if (BirthDate > today.AddYears(-UserAge))
            {
                UserAge--;
            }
            
            IsAdmin = true;
            CreationTime = DateTime.Now;
        }
    }
}