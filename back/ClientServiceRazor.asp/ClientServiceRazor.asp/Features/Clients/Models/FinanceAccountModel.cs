using System;
using System.Collections.Generic;

namespace ClientServiceRazor.asp.Features.Clients.Models
{
    public class FinanceAccountModel
    {
        public int Id { get; set; }
        public decimal Balance { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }

        public ICollection<ClientFinanceAccountModel> ClientFinanceAccounts { get; set; } = new List<ClientFinanceAccountModel>();
    }
}