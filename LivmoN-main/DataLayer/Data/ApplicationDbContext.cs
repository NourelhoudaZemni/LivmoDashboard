using DataLayer.Models;
using IdentityServer4.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DataLayer.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<Users>
    {
        public ApplicationDbContext(
            DbContextOptions options,
            IOptions<OperationalStoreOptions> operationalStoreOptions) : base(options, operationalStoreOptions)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Experience one to many :

            modelBuilder.Entity<Experience>()
                .HasOne(c => c.Host)
                .WithMany(e => e.Experiences)
                .HasForeignKey (s =>s.HostId)             
                .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<FoodService>()
               .HasOne(c => c.Commercant)
               .WithMany(e => e.FoodServices)
               .HasForeignKey(s => s.CommercantId)
               .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<TransportService>()
             .HasOne(c => c.Commercant)
             .WithMany(e => e.TransportServices)
             .HasForeignKey(s => s.CommercantId)
             .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<LodgingService>()
             .HasOne(c => c.Commercant)
             .WithMany(e => e.LodgingServices)
             .HasForeignKey(s => s.CommercantId)
             .OnDelete(DeleteBehavior.Cascade);

            modelBuilder.Entity<Photo>()
          .HasOne(a => a.AppUser)
          .WithMany(b => b.Photos)
          .HasForeignKey(b => b.UserId)
          .OnDelete(DeleteBehavior.Cascade);

            //Adding Data
            modelBuilder.Seed();

            // Multiple images :


            modelBuilder.Entity<Experience>()
              .HasMany(c => c.Photos)
              .WithOne(e => e.Experience)
              .HasForeignKey (e=>e.ExperienceIDFK)
              .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder.Entity<LodgingExperience>()
              .HasMany(c => c.Lodgingphoto)
              .WithOne(e => e.LodgingExperience)
              .HasForeignKey(e => e.LodgingExperineceId)
              .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder.Entity<FoodExperience>()
            .HasMany(c => c.Foodphoto)
            .WithOne(e => e.FoodExperience)
            .HasForeignKey(e => e.FoodxperineceId)
              .OnDelete(DeleteBehavior.ClientCascade);


            modelBuilder.Entity<TransportExperience>()
            .HasMany(c => c.Transphoto)
            .WithOne(e => e.TransportExperience)
            .HasForeignKey(e => e.TransportExperineceId)
              .OnDelete(DeleteBehavior.ClientCascade);


            modelBuilder.Entity<Activity>()
            .HasMany(c => c.Activityphoto)
            .WithOne(e => e.Activity)
            .HasForeignKey(e => e.ActivitiyId)
              .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder.Entity<LodgingService>()
           .HasMany(c => c.Lodgingphoto)
           .WithOne(e => e.lodgingService)
           .HasForeignKey(e => e.LodgingId)
             .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder.Entity<TransportService>()
           .HasMany(c => c.Transportphoto)
           .WithOne(e => e.TransportService)
           .HasForeignKey(e => e.TransportId)
             .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder.Entity<FoodService>()
           .HasMany(c => c.Foodhoto)
           .WithOne(e => e.foodService)
           .HasForeignKey(e => e.FoodServId)
             .OnDelete(DeleteBehavior.ClientCascade);

            modelBuilder.Entity<FoodService>()
          .HasMany(c => c.Restaurantphoto)
          .WithOne(e => e.restaurantService)
          .HasForeignKey(e => e.FoodServId)
            .OnDelete(DeleteBehavior.ClientCascade);

            // User one to one on Image




            modelBuilder.Entity<Experience>().Property(p => p.Price)
            .HasColumnType("decimal(18,4)");
            modelBuilder.Entity<FoodService>().Property(p => p.FoodPrice)
            .HasColumnType("decimal(18,4)");
            modelBuilder.Entity<TransportService>().Property(p => p.PricePerDay)
            .HasColumnType("decimal(18,4)");
            modelBuilder.Entity<LodgingService>().Property(p => p.PricePerNight)
            .HasColumnType("decimal(18,4)");


        }


        public DbSet<Users> User { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Hote> Hosts { get; set; }
        public DbSet<Commercant> Commercants { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Experience> Experience { get; set; }
        public DbSet<LodgingExperience> LodgingExperience { get; set; }
        public DbSet<TransportExperience> TransportExperience { get; set; }
        public DbSet<FoodExperience> Foodxperience { get; set; }
        public DbSet<Activity> Activity { get; set; }
        public DbSet<Photo> Photos { get; set; }
        public DbSet<ExperienceDates> ExperienceDates { get; set; }
        public DbSet<Days> Days { get; set; }
        public DbSet<FoodService> foodServices { get; set; }
        public DbSet<TransportService> transportServices { get; set; }
        public DbSet<LodgingService> lodgingServices { get; set; }
        public DbSet<Themes> Themes { get; set; }
       
    }
}
