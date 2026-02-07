using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DTO.ASP.Pages
{
    public class StudentProfileModel : PageModel
    {
        public class StudentProfileDto
        {
            public int StudentId { get; set; }
            public string FullName { get; set; }
            public DateTime BirthDate { get; set; }
            public DateTime EnrollmentDateTime { get; set; }
            public int Course { get; set; }
            public double AverageGrade { get; set; }
            public string Faculty { get; set; }
            public bool IsBudgetStudent { get; set; }
            public bool HasScholarship { get; set; }
            public bool IsGraduatingStudent { get; set; }
        }

        public StudentProfileDto Student { get; set; }

        public void OnGet()
        {
            Student = new StudentProfileDto
            {
                StudentId = 12345,
                FullName = "Alice Johnson",
                BirthDate = new DateTime(2003, 5, 20),
                EnrollmentDateTime = new DateTime(2021, 9, 1, 10, 30, 0),
                Course = 3,
                AverageGrade = 4.5,
                Faculty = "Computer Science",
                IsBudgetStudent = true,
                HasScholarship = true,
                IsGraduatingStudent = false
            };
        }
    }
}