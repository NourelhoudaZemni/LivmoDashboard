using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.RepInterface
{
    public interface IExperienceDaysRepository
    {
        public Task<Days> InsertDays(Days entity);
        public Task<Days> DeleteDays(Guid id);
        public Task<IEnumerable<Days>> GetDays(Guid expId);
        public Task<Days> FindDaysById(Guid id);
    }
}
