using System;
using System.ComponentModel.DataAnnotations;

namespace Registr.asp.Models
{
    public class PlayerRegistration
    {
        [Required(ErrorMessage = "Login is required")]
        [Display(Prompt = "Login")]
        public string Login { get; set; }

        [Required(ErrorMessage = "Date of birth is required")]
        [Display(Prompt = "yyyy-MM-dd")]
        [DataType(DataType.Date)]
        public DateTime DateOfBirth { get; set; }

        [Required(ErrorMessage = "Password is required")]
        [Display(Prompt = "Password")]
        [RegularExpression(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$", 
            ErrorMessage = "Password must contain uppercase letters, lowercase letters and digits")]
        public string Password { get; set; }

        [Required(ErrorMessage = "Password confirmation is required")]
        [Display(Prompt = "Confirm Password")]
        [Compare("Password", ErrorMessage = "Password and confirmation do not match")]
        public string PasswordConfirmation { get; set; }

        [Required(ErrorMessage = "Re-confirmation of password is required")]
        [Display(Prompt = "Re-confirm Password")]
        [Compare("PasswordConfirmation", ErrorMessage = "Confirmations do not match")]
        public string PasswordReconfirmation { get; set; }

        [Required(ErrorMessage = "Phone number is required")]
        [Display(Prompt = "Phone Number")]
        [Phone(ErrorMessage = "Invalid phone number format")]
        public string PhoneNumber { get; set; }

        [Required(ErrorMessage = "Profile URL is required")]
        [Display(Prompt = "Profile URL")]
        [Url(ErrorMessage = "Invalid URL format")]
        public string ProfileUrl { get; set; }
    }
}