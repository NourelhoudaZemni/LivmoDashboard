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
    public class ExperienceDaysService : IExperienceDaysService
    {
        readonly private IGenericRepository<FoodExperience> GenericRepo;
        readonly private IExperienceDaysRepository ExperienceRepo;

        public ExperienceDaysService(IGenericRepository<FoodExperience> genericRepo, IExperienceDaysRepository experienceRepo)
        {
            GenericRepo = genericRepo;
            ExperienceRepo = experienceRepo;
        }

        public async Task<Days> DeleteDays(Guid id)
        {
            return await ExperienceRepo.DeleteDays(id);
        }

        public async Task<Days> FindDaysByExperience(Guid id)
        {
            return await ExperienceRepo.FindDaysById(id);
        }

        public async Task<IEnumerable<Days>> GetDays(Guid expId)
        {
            return await ExperienceRepo.GetDays(expId);
        }

        public async Task<Days> InsertDays(Days entity)
        {
            return await ExperienceRepo.InsertDays(entity);
        }
    }
}
