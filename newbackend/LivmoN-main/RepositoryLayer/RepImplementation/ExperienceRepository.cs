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
    public class ExperienceRepository : IExperienceRepository
    {
        public readonly ApplicationDbContext _dbContext;
        private readonly IGenericRepository<Experience> _genericRepoExp;

        public ExperienceRepository(ApplicationDbContext dbContext, IGenericRepository<Experience> GenericRepoExp)
        {
            _dbContext = dbContext;
            _genericRepoExp = GenericRepoExp;
        }

        public async Task<Experience> DeleteExperience(Experience entity)
        {
            var exp = await _dbContext.Experience.FindAsync(entity.ExperienceId);
            if (exp != null)
            {
                _dbContext.Experience.Remove(exp);
                await _dbContext.SaveChangesAsync();
            }
            return entity;
        }
        public async Task<Experience> DeleteExperience(Guid id)
        {
            var exp = await _dbContext.Experience.FindAsync(id);
            if (exp != null)
            {
                _dbContext.Experience.Remove(exp);
                await _dbContext.SaveChangesAsync();
            }
            return exp;
        }

        public async Task<Experience> FindExpById(Guid id)
        {
            var exp = await _dbContext.Experience
                .Include(c => c.ExperienceDates)
                .Include(p => p.Activites)
                .Include(am => am.LodgingExperience)
                .Include(a => a.FoodExperience)
                .Include(w => w.TransportExperience)
                .Include(i => i.ExperienceDates)
                .FirstOrDefaultAsync(n => n.ExperienceId == id);

            return exp;
        }

        public async Task<IEnumerable<Experience>> GetActiveExperiences()
        {
            var exp = await _dbContext.Experience
                                            .Where(p => p.ExperienceStatus.StartsWith("Active")).ToListAsync();
            return exp;
        }

        // Useless !
        public async Task<Experience> GetExperienceDetailsAsync(string id)
        {
            var experience = await _genericRepoExp.GetByIdAsync(id);
            return experience;
        }

        public async Task<IEnumerable<Experience>> GetHostExperiences(string HostId)
        {
            var exp = await  _dbContext.Experience
                                             /*.Include(u => u.Host)*/
                                             .Where(p => p.HostId == HostId).ToListAsync();
            return exp;
        }
        public async Task<IEnumerable<Experience>> GetHostValidExperiences(string id)
        {
            var exp = await _dbContext.Experience
                                           .Where(p => p.HostId == id && p.IsValid.StartsWith("Valid")).ToListAsync();
            return exp;
        }
        public async Task<IEnumerable<Experience>> GetHostInvalidExperiences(string id)
        {
            var exp = await _dbContext.Experience
                                           .Where(p => p.HostId == id && p.IsValid.StartsWith("InValid")).ToListAsync();
            return exp;
        }
        public async Task<IEnumerable<Experience>> GetHostEnAttExperiences(string id)
        {
            var exp = await _dbContext.Experience
                                           .Where(p => p.HostId == id && p.IsValid.StartsWith("En Attente")).ToListAsync();
            return exp;
        }
        public async Task<IEnumerable<Experience>> GetValidExperiences()
        {
            var exp = await _dbContext.Experience
                                           .Where(p => p.IsValid.StartsWith("Valid")).ToListAsync();
            return exp;
        }

        public async Task<Experience> InsertExperience(Experience model)
        {
           
            await _dbContext.Experience.AddAsync(model);
            await _dbContext.SaveChangesAsync();
            return model;

        }

        public async Task PutExperienceAsync(Guid id, Experience entity)
        {
            var Experience = await _dbContext.Experience.SingleAsync(e => e.ExperienceId == entity.ExperienceId);
            _dbContext.Entry(Experience).State = EntityState.Detached; 
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
