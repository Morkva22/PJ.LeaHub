using System;

namespace ClientServiceRazor.asp.Features.Clients.Models
{
    public class PhoneModel
    {
        public int Id { get; set; }
        public string Number { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public int ClientId { get; set; }
        public ClientModel Client { get; set; }
    }
}