using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.RepInterface
{
    public interface IHostRepository
    {
        public Task<Hote> GetHoteDetailsAsync(string id);
        public Task PutHoteAsync(string id, Hote entity);


    public Task PutHoteVerify(string id);

    public IEnumerable<Hote> GetAllHotesAsync();
        public Task<Hote> FindByEmail(string mail);
        public Task<string> Delete(Hote entity);
    }
}
