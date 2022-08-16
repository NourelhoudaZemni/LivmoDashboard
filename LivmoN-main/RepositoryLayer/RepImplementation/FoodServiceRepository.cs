using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataLayer.Data;
using DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.RepInterface;

namespace RepositoryLayer.RepImplementation
{
    public class FoodServiceRepository : IFoodServiceRepository
    {
        public readonly ApplicationDbContext _dbContext;
        private readonly IGenericRepository<FoodService> _genericRepoExp;

        public FoodServiceRepository(ApplicationDbContext dbContext, IGenericRepository<FoodService> GenericRepoExp)
        {
            _dbContext = dbContext;
            _genericRepoExp = GenericRepoExp;
        }

        public async Task<FoodService> DeleteFoodService(FoodService entity)
        {
            var exp = await _dbContext.foodServices.FindAsync(entity.FoodServId);
            if (exp != null)
            {
                _dbContext.foodServices.Remove(exp);
                await _dbContext.SaveChangesAsync();
            }
            return entity;
        }
        public async Task<FoodService> DeleteFoodService(Guid id)
        {
            var exp = await _dbContext.foodServices.FindAsync(id);
            if (exp != null)
            {
                _dbContext.foodServices.Remove(exp);
                await _dbContext.SaveChangesAsync();
            }
            return exp;
        }

        public async Task<FoodService> FindFoodById(Guid id)
        {
            var exp = await _dbContext.foodServices
                .FirstOrDefaultAsync(n => n.FoodServId == id);

            return exp;
        }


        public async Task<IEnumerable<FoodService>> GetCommercantFoodServices(string HostId)
        {
            var exp = await _dbContext.foodServices
                                             .Where(p => p.CommercantId == HostId).ToListAsync();
            return exp;
        }

        public async Task<IEnumerable<FoodService>> GetValidFoodServices()
        {
            var exp = await _dbContext.foodServices
                                           .Where(p => p.IsValid == true).ToListAsync();
            return exp;
        }

        public async Task<FoodService> InsertFoodService(FoodService model)
        {

            await _dbContext.foodServices.AddAsync(model);
            await _dbContext.SaveChangesAsync();
            return model;

        }

        public async Task PutFoodServiceAsync(Guid id, FoodService entity)
        {
            var FoodService = await _dbContext.foodServices.SingleAsync(e => e.FoodServId == entity.FoodServId);
            _dbContext.Entry(FoodService).State = EntityState.Detached;
            _dbContext.Entry(entity).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (Exception)
            {
                throw new NotImplementedException();
            }
        }
    }
}

