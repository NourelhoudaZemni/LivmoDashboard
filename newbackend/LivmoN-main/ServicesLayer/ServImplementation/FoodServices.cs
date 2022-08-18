using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLayer.Models;
using RepositoryLayer.RepInterface;
using ServicesLayer.ServInterface;

namespace ServicesLayer.ServImplementation
{
    public class FoodServices : IFoodService
    {
        readonly private IGenericRepository<FoodService> GenericRepo;
        readonly private IFoodServiceRepository _FoodServiceRepo;

        public FoodServices(IGenericRepository<FoodService> genericRepo, IFoodServiceRepository FoodServiceRepo)
        {
            GenericRepo = genericRepo;
            _FoodServiceRepo = FoodServiceRepo;
        }

        public async Task<FoodService> DeleteFoodService(FoodService entity)
        {
            return await _FoodServiceRepo.DeleteFoodService(entity);
        }

        public async Task<FoodService> DeleteFoodService(Guid id)
        {
            return await _FoodServiceRepo.DeleteFoodService(id);
        }

        public async Task<FoodService> FindFoodServiceById(Guid id)
        {
            return await _FoodServiceRepo.FindFoodById(id);
        }

        public IEnumerable<FoodService> GetAllFoodServices()
        {
            return GenericRepo.GetAll();

        }

        public async Task<IEnumerable<FoodService>> GetAllCommercantFoodServices(string HostId)
        {
            return await _FoodServiceRepo.GetCommercantFoodServices(HostId);

        }

        public async Task<IEnumerable<FoodService>> GetValidFoodServices()
        {
            return await _FoodServiceRepo.GetValidFoodServices();
        }

        public async Task<FoodService> InsertFoodService(FoodService entity)
        {
            return await _FoodServiceRepo.InsertFoodService(entity);
        }

        public Task UpdateFoodServiceAsync(Guid id, FoodService FoodService)
        {
            return _FoodServiceRepo.PutFoodServiceAsync(id, FoodService);

        }
    }
}
