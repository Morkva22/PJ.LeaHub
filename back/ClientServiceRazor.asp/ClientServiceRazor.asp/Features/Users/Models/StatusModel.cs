using System.Collections.Generic;

namespace ClientServiceRazor.asp.Features.Users.Models
{
    public class StatusModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<UserModel> Users { get; set; } = new List<UserModel>();
    }
}