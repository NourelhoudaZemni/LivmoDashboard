using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.RepInterface
{
    public interface IFoodExpRepository
    {
        public Task<FoodExperience> InsertFoodExperience(FoodExperience entity);
        public Task<FoodExperience> DeleteFoodExperience(FoodExperience entity);
        public Task<FoodExperience> DeleteFoodExperience(Guid id);
        public Task<IEnumerable<FoodExperience>> GetSpecificFoodExperiences(Guid expId);
        public Task<FoodExperience> FindFoodById(Guid id);
    }
}
