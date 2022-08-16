using DataLayer.Data;
using DataLayer.Models;
using Microsoft.EntityFrameworkCore;
using RepositoryLayer.RepInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.RepImplementation
{
    public class ExperienceDaysRepository : IExperienceDaysRepository
    {
        public readonly ApplicationDbContext _dbContext;
        private readonly IGenericRepository<Days> _genericRepoExp;
        public ExperienceDaysRepository(ApplicationDbContext dbContext, IGenericRepository<Days> GenericRepoExp)
        {
            _dbContext = dbContext;
            _genericRepoExp = GenericRepoExp;
        }

        public async Task<Days> DeleteDays(Guid id)
        {
            var exp = await _dbContext.Days.FindAsync(id);
            if (exp != null)
            {
                _dbContext.Days.Remove(exp);
                await _dbContext.SaveChangesAsync();
            }
            return exp;
        }

        public async Task<Days> FindDaysById(Guid id)
        {
            var exp = await _dbContext.Days.FindAsync(id);
            if (exp != null)
            {
                _dbContext.Days.Remove(exp);
                await _dbContext.SaveChangesAsync();
            }
            return exp;
        }

        public async Task<IEnumerable<Days>> GetDays(Guid expId)
        {
            //var exp = await _dbContext.Days
            //                                         .Include(u => u.Experiences)
            //                                         .Where(p => p.Experiences. == expId).ToListAsync();
            //return exp;
            throw new NotImplementedException();

        }

        public async Task<Days> InsertDays(Days entity)
        {
            await _dbContext.Days.AddAsync(entity);
            await _dbContext.SaveChangesAsync();
            return entity;
        }
    }
}
