using System;
using System.Collections.Generic;
using ClientServiceRazor.asp.Features.Clients.Models;

namespace ClientServiceRazor.asp.Features.Clients.Models
{
    public class ClientModel
    {
        public int Id { get; set; }
        public string Surname { get; set; }
        public string FirstName { get; set; }
        public string Patronymic { get; set; }
        public string Email { get; set; }
        public DateTime BirthDate { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public int AddressId { get; set; }
        public AddressModel Address { get; set; }

        public ICollection<PhoneModel> Phones { get; set; } = new List<PhoneModel>();
        public ICollection<ClientFinanceAccountModel> ClientFinanceAccounts { get; set; } = new List<ClientFinanceAccountModel>();
    }
}