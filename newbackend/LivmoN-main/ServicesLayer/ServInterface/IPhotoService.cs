using CloudinaryDotNet.Actions;
using DataLayer.Models;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesLayer.ServInterface
{
    public interface IPhotoService
    {
        public Task<ImageUploadResult> AddPhotoAsync(IFormFile photo);
        public Task<ImageUploadResult> AddIDFilesAsync(IFormFile photo);
        public Task<ImageUploadResult> AddCADTouristFilesAsync(IFormFile photo);
        public Task<ImageUploadResult> AddLicenceFilesAsync(IFormFile photo);
        public Task<ImageUploadResult> AddRNEFilesAsync(IFormFile photo);
        public Task<DeletionResult>DeletePhotoAsync(string publicId);
        public Task<Photo> InsertPhoto(Photo entity);
        public Task<ImageUploadResult> InsertExperiencePhotos(IFormFile photo);
        public Task<ImageUploadResult> InsertActivityPhotos(IFormFile photo);
        public Task<Photo> DeletePic(Guid id);
        public Task<Photo> FindPicById(Guid id);


    }
}
