using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace DTO5.ASP.Pages
{
    public class EventRegistrationModel : PageModel
    {
        public enum TicketType
        {
            Standard,
            VIP,
            Student
        }

        public class EventRegistrationDto
        {
            [Required(ErrorMessage = "Full Name is required")]
            [RegularExpression(@"^[a-zA-Z\s]+$", ErrorMessage = "Full Name must not contain digits")]
            public string FullName { get; set; }

            [Required(ErrorMessage = "Email is required")]
            [EmailAddress(ErrorMessage = "Invalid email format")]
            public string Email { get; set; }

            [Required(ErrorMessage = "Phone Number is required")]
            [Phone(ErrorMessage = "Invalid phone number format")]
            public string PhoneNumber { get; set; }

            [Required(ErrorMessage = "Age is required")]
            [Range(0, 150, ErrorMessage = "Age must be between 0 and 150")]
            public int Age { get; set; }

            [Required(ErrorMessage = "Ticket Quantity is required")]
            [Range(1, int.MaxValue, ErrorMessage = "Ticket Quantity must be greater than 0")]
            public int TicketQuantity { get; set; }

            [Required(ErrorMessage = "Ticket Type is required")]
            public TicketType TicketType { get; set; }

            [Required(ErrorMessage = "Participation Format is required")]
            public string ParticipationFormat { get; set; }

            public bool LunchIncluded { get; set; }
            public bool CertificateNeeded { get; set; }
            public string Comment { get; set; }
        }

        [BindProperty]
        public EventRegistrationDto Registration { get; set; }

        public bool FormSubmitted { get; set; }

        public void OnGet()
        {
            FormSubmitted = false;
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                FormSubmitted = false;
                return Page();
            }

            FormSubmitted = true;
            return Page();
        }
    }
}