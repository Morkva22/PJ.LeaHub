using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Registr.asp.Models;


namespace Registr.asp.Pages
{
    public class RegisterModel : PageModel
    {
        [BindProperty]
        public PlayerRegistration Player { get; set; }

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            return RedirectToPage();
        }
    }
}