using System;

namespace ClientServiceRazor.asp.Features.Clients.Models
{
    public class AddressModel
    {
        public int Id { get; set; }
        public string Country { get; set; }
        public string Region { get; set; }
        public string Area { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string Building { get; set; }
        public string Apartment { get; set; }
        public string Entrance { get; set; }
        public string Room { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public ClientModel Client { get; set; }
    }
}