namespace ClientServiceRazor.asp.Features.Clients.Models
{
    public class ClientFinanceAccountModel
    {
        public int ClientId { get; set; }
        public ClientModel Client { get; set; }

        public int FinanceAccountId { get; set; }
        public FinanceAccountModel FinanceAccount { get; set; }
    }
}