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
   public class UserRepository : IUserRepository
    {
        public readonly ApplicationDbContext _dbContext;
        public UserRepository(ApplicationDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<Users> FindByEmail(string mail)
        {
            var user = await _dbContext.User.SingleAsync(x => x.Email == mail);
            _dbContext.Entry(user);
            return user;
        }

        public IEnumerable<Users> GetAllUserAsync()
        {
            var User = _dbContext.User.Where(User => User.Id != "");

            return User;
        }

        public async Task<Users> GetUserDetailsAsync(string id)
        {
            var User = await _dbContext.User.SingleAsync(User => User.Id == id);

            _dbContext.Entry(User);

            return User;
        }

        public async Task PutUserAsync(string id, Users entity)
        {
            var user = await _dbContext.User.SingleAsync(user => user.Id == entity.Id);
            _dbContext.Entry(user).State = EntityState.Detached;
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
