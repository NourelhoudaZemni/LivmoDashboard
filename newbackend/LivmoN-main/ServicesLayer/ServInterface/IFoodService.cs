using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesLayer.ServInterface
{
    public interface IFoodService
    {
        public Task<FoodService> InsertFoodService(FoodService entity);
        public Task<FoodService> DeleteFoodService(FoodService entity);
        public Task<FoodService> DeleteFoodService(Guid id);
        public Task<FoodService> FindFoodServiceById(Guid id);
        public IEnumerable<FoodService> GetAllFoodServices();
        public Task<IEnumerable<FoodService>> GetAllCommercantFoodServices(string HostId);
        public Task<IEnumerable<FoodService>> GetValidFoodServices();
        public Task UpdateFoodServiceAsync(Guid id, FoodService FoodService);
    }
}
