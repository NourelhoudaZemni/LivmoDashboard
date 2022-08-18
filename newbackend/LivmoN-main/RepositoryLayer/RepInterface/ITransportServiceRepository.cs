using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer.RepInterface
{
    public interface ITransportServiceRepository
    {
        public Task<TransportService> InsertTransportService(TransportService entity);
        public Task<TransportService> DeleteTransportService(TransportService entity);
        public Task<TransportService> DeleteTransportService(Guid id);
        public Task<TransportService> FindTransportById(Guid id);
        public Task PutTransportServiceAsync(Guid id, TransportService entity);
        public Task<IEnumerable<TransportService>> GetCommercantTransportServices(string HostId);
        public Task<IEnumerable<TransportService>> GetValidTransportServices();
    }
}
