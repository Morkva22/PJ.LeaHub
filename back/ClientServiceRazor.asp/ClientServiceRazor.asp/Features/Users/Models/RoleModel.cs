using System.Collections.Generic;
using ClientServiceRazor.asp.Features.Users.Models;

namespace ClientServiceRazo.asp.Features.Users.Models
{
    public class RoleModel
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public ICollection<UserModel> Users { get; set; } = new List<UserModel>();
    }
}