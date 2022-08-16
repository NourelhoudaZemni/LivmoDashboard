using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.RepInterface
{
    public interface IUserRepository
    {
        public Task<Users> GetUserDetailsAsync(string id);
        public Task PutUserAsync(string id, Users entity);
        public IEnumerable<Users> GetAllUserAsync();
        public Task<Users> FindByEmail(string mail);
    }
}
