﻿using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.RepInterface
{
    public interface IExperienceRepository
    {
        public Task PutExperienceAsync(Guid id, Experience entity);
        public Task<Experience> InsertExperience(Experience entity);
        public Task<Experience> DeleteExperience(Experience entity);
        public Task<Experience> DeleteExperience(Guid id);
        public Task<Experience> FindExpById(Guid id);
        public Task<IEnumerable<Experience>> GetHostExperiences(string HostId);
        public Task<IEnumerable<Experience>> GetActiveExperiences();
        public Task<IEnumerable<Experience>> GetValidExperiences();



    }
}