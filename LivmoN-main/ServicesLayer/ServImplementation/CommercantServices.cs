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
    public class CommercantServices : ICommercantService
    {
        readonly private IGenericRepository<Commercant> GenericRepo;
        readonly private ICommercantRepository CommercantRepo;
        public CommercantServices(IGenericRepository<Commercant> _GenericRepo, ICommercantRepository _CompanyRepo)
        {
            GenericRepo = _GenericRepo;
            CommercantRepo = _CompanyRepo;
        }
        public Task AddCommercantAsync(Commercant Commercant)
        {
            return GenericRepo.InsertAsync(Commercant);
        }

        public Task DeleteCommercantAsync(Commercant Commercant)
        {
            return GenericRepo.DeleteAsync(Commercant.Id);
        }

        public IList<Commercant> GetAllCommercants()
        {
            return CommercantRepo.GetAllCommercantsAsync().ToList();
        }

        public Task<Commercant> GetCommercantById(string id)
        {
            return CommercantRepo.GetCommercantDetailsAsync(id);
        }
        public Task<Commercant> GetCommercantByEmail(string email)
        {
            return CommercantRepo.FindByEmail(email);
        }


        public Task UpdateCommercantAsync(string id, Commercant Commercant)
        {
            return CommercantRepo.PutCommercantAsync(id, Commercant);
        }
    }
}
