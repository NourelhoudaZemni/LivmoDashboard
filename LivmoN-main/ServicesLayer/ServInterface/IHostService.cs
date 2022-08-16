using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesLayer.ServInterface
{
    public interface IHostService
    {
        public Task AddHostAsync(Hote Hote);
        public IList<Hote> GetAllHosts();
        public Task UpdateHostAsync(string id, Hote Hote);

        public Task UpdateHostVerify(string id);

    

        public Task<Hote> GetHostById(string id);
        public Task<Hote> GetHostByEmail(string email);

        public Task DeleteHostAsync(Hote Hote);
    }
}
