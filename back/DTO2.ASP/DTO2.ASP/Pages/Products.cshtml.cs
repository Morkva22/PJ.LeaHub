using Microsoft.AspNetCore.Mvc.RazorPages;

namespace DTO2.ASP.Pages
{
    public class ProductsModel : PageModel
    {
        public enum ProductCategory
        {
            Electronics,
            Food,
            Clothing,
            Books
        }

        public class Product
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public decimal Price { get; set; }
            public int Quantity { get; set; }
            public bool IsAvailable { get; set; }
            public bool IsDiscounted { get; set; }
            public DateTime CreatedDate { get; set; }
            public ProductCategory Category { get; set; }
        }

        public List<Product> Products { get; set; }

        public void OnGet()
        {
            Products = new List<Product>
            {
                new Product
                {
                    Id = 1,
                    Name = "Laptop Dell XPS",
                    Price = 1299.99m,
                    Quantity = 15,
                    IsAvailable = true,
                    IsDiscounted = true,
                    CreatedDate = new DateTime(2024, 1, 15),
                    Category = ProductCategory.Electronics
                },
                new Product
                {
                    Id = 2,
                    Name = "Organic Apples",
                    Price = 3.50m,
                    Quantity = 0,
                    IsAvailable = false,
                    IsDiscounted = false,
                    CreatedDate = new DateTime(2024, 6, 20),
                    Category = ProductCategory.Food
                },
                new Product
                {
                    Id = 3,
                    Name = "Winter Jacket",
                    Price = 89.99m,
                    Quantity = 25,
                    IsAvailable = true,
                    IsDiscounted = true,
                    CreatedDate = new DateTime(2023, 11, 10),
                    Category = ProductCategory.Clothing
                },
                new Product
                {
                    Id = 4,
                    Name = "Programming Guide",
                    Price = 45.00m,
                    Quantity = 50,
                    IsAvailable = true,
                    IsDiscounted = false,
                    CreatedDate = new DateTime(2024, 3, 5),
                    Category = ProductCategory.Books
                },
                new Product
                {
                    Id = 5,
                    Name = "Wireless Headphones",
                    Price = 199.99m,
                    Quantity = 8,
                    IsAvailable = true,
                    IsDiscounted = true,
                    CreatedDate = new DateTime(2024, 7, 12),
                    Category = ProductCategory.Electronics
                },
                new Product
                {
                    Id = 6,
                    Name = "Coffee Beans",
                    Price = 12.99m,
                    Quantity = 100,
                    IsAvailable = true,
                    IsDiscounted = false,
                    CreatedDate = new DateTime(2024, 8, 1),
                    Category = ProductCategory.Food
                }
            };
        }
    }
}