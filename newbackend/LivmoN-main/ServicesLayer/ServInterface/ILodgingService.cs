using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesLayer.ServInterface
{
    public interface ILodgingService
    {
        public Task<LodgingService> InsertLodgingService(LodgingService entity);
        public Task<LodgingService> DeleteLodgingService(LodgingService entity);
        public Task<LodgingService> DeleteLodgingService(Guid id);
        public Task<LodgingService> FindLodgingServiceById(Guid id);
        public IEnumerable<LodgingService> GetAllLodgingServices();
        public Task<IEnumerable<LodgingService>> GetAllCommercantLodgingServices(string HostId);
        public Task<IEnumerable<LodgingService>> GetValidLodgingServices();
        public Task UpdateLodgingServiceAsync(Guid id, LodgingService LodgingService);
    }
}
