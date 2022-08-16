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
    public class ExperienceService : IExperienceService
    {
        readonly private IGenericRepository<Experience> GenericRepo;
        readonly private IExperienceRepository ExperienceRepo;

        public  ExperienceService(IGenericRepository<Experience> genericRepo, IExperienceRepository experienceRepo)
        {
            GenericRepo = genericRepo;
            ExperienceRepo = experienceRepo;
        }

        public async Task<Experience> DeleteExperience(Experience entity)
        {
            return await ExperienceRepo.DeleteExperience(entity);
        }

        public async Task<Experience> DeleteExperience(Guid id)
        {
            return await ExperienceRepo.DeleteExperience(id);
        }

        public async Task<Experience> FindExperienceById(Guid id)
        {
            return await ExperienceRepo.FindExpById(id);
        }

        public async Task<IEnumerable<Experience>> GetActiveExperiences()
        {
            return await ExperienceRepo.GetActiveExperiences();

        }

        public IEnumerable<Experience> GetAllExperiences()
        {
            return GenericRepo.GetAll();

        }

        public async Task <IEnumerable<Experience>> GetAllHostExperiences(string HostId)
        {
            return await ExperienceRepo.GetHostExperiences(HostId);

        }

        public async Task<IEnumerable<Experience>> GetValidExperiences()
        {
            return await ExperienceRepo.GetValidExperiences();
        }

        public async Task<Experience> InsertExperience(Experience entity)
        {
            return await ExperienceRepo.InsertExperience(entity);
        }

        public Task UpdateExperienceAsync(Guid id, Experience Experience)
        {
            return ExperienceRepo.PutExperienceAsync(id, Experience);

        }
    }
}
