using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.RepInterface
{
    public interface IFoodServiceRepository
    {
        public Task<FoodService> InsertFoodService(FoodService entity);
        public Task<FoodService> DeleteFoodService(FoodService entity);
        public Task<FoodService> DeleteFoodService(Guid id);
        public Task<FoodService> FindFoodById(Guid id);
        public Task PutFoodServiceAsync(Guid id, FoodService entity);
        public Task<IEnumerable<FoodService>> GetCommercantFoodServices(string HostId);
        public Task<IEnumerable<FoodService>> GetValidFoodServices();

    }
}
