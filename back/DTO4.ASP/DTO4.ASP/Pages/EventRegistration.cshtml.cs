using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace DTO4.ASP.Pages
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
            public string FullName { get; set; }

            [EmailAddress]
            public string Email { get; set; }

            public string PhoneNumber { get; set; }
            public int Age { get; set; }
            public int TicketQuantity { get; set; }
            public TicketType TicketType { get; set; }
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

        public void OnPost()
        {
            FormSubmitted = true;
        }
    }
}