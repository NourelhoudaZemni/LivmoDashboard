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
    public class LodgingServiceRepository : ILodgingServiceRepository
    {
        public readonly ApplicationDbContext _dbContext;
        private readonly IGenericRepository<LodgingService> _genericRepoExp;

        public LodgingServiceRepository(ApplicationDbContext dbContext, IGenericRepository<LodgingService> GenericRepoExp)
        {
            _dbContext = dbContext;
            _genericRepoExp = GenericRepoExp;
        }

        public async Task<LodgingService> DeleteLodgingService(LodgingService entity)
        {
            var exp = await _dbContext.lodgingServices.FindAsync(entity.LodgingId);
            if (exp != null)
            {
                _dbContext.lodgingServices.Remove(exp);
                await _dbContext.SaveChangesAsync();
            }
            return entity;
        }
        public async Task<LodgingService> DeleteLodgingService(Guid id)
        {
            var exp = await _dbContext.lodgingServices.FindAsync(id);
            if (exp != null)
            {
                _dbContext.lodgingServices.Remove(exp);
                await _dbContext.SaveChangesAsync();
            }
            return exp;
        }

        public async Task<LodgingService> FindLodgingById(Guid id)
        {
            var exp = await _dbContext.lodgingServices
                .FirstOrDefaultAsync(n => n.LodgingId == id);

            return exp;
        }


        public async Task<IEnumerable<LodgingService>> GetCommercantLodgingServices(string HostId)
        {
            var exp = await _dbContext.lodgingServices
                                             .Where(p => p.CommercantId == HostId).ToListAsync();
            return exp;
        }

        public async Task<IEnumerable<LodgingService>> GetValidLodgingServices()
        {
            var exp = await _dbContext.lodgingServices
                                           .Where(p => p.IsValid == true).ToListAsync();
            return exp;
        }

        public async Task<LodgingService> InsertLodgingService(LodgingService model)
        {

            await _dbContext.lodgingServices.AddAsync(model);
            await _dbContext.SaveChangesAsync();
            return model;

        }

        public async Task PutLodgingServiceAsync(Guid id, LodgingService entity)
        {
            var LodgingService = await _dbContext.lodgingServices.SingleAsync(e => e.LodgingId == entity.LodgingId);
            _dbContext.Entry(LodgingService).State = EntityState.Detached;
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
