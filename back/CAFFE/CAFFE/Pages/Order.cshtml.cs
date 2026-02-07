using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace CAFFE.Pages
{
    public class OrderModel : PageModel
    {
        [BindProperty]
        public string CustomerName { get; set; }

        [BindProperty]
        public string DrinkChoice { get; set; }

        [BindProperty]
        public string Comment { get; set; }

        public bool OrderSubmitted { get; set; }

        public void OnGet()
        {
            OrderSubmitted = false;
        }

        public void OnPost()
        {
            OrderSubmitted = true;
        }
    }
}