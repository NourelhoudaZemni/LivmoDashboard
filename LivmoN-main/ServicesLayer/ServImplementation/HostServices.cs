using DataLayer.Models;
using RepositoryLayer.RepInterface;
using ServicesLayer.ServInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesLayer.ServImplementation
{
    public class HostServices : IHostService

    {
        readonly private IGenericRepository<Hote> GenericRepo;
        readonly private IHostRepository HostRepo;
        public HostServices(IGenericRepository<Hote> _GenericRepo, IHostRepository _CompanyRepo)
        {
            GenericRepo = _GenericRepo;
            HostRepo = _CompanyRepo;
        }
        public Task AddHostAsync(Hote Hote)
        {
            return GenericRepo.InsertAsync(Hote);

        }

        public Task DeleteHostAsync(Hote Hote)
        {
            return GenericRepo.DeleteAsync(Hote.Id);
        }

        public IList<Hote> GetAllHosts()
        {
            return HostRepo.GetAllHotesAsync().ToList();
        }

        public Task<Hote> GetHostById(string id)
        {
            return HostRepo.GetHoteDetailsAsync(id);
        }
        public Task<Hote> GetHostByEmail(string email)
        {
            return HostRepo.FindByEmail(email);
        }

        public Task UpdateHostAsync(string id, Hote Hote)
        {
            return HostRepo.PutHoteAsync(id, Hote);
        }

    public Task UpdateHostVerify(string id)
    {
      return HostRepo.PutHoteVerify(id);
    }
     
  }
}
