using BagNgo.ViewModels.Implementation;
using DataLayer.Data;
using DataLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using RepositoryLayer.RepInterface;
using ServicesLayer.ServInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;



namespace BagNgo.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ExperienceController : Controller
    {
        private readonly IExperienceService ExperienceService;
        private readonly ITransportExperienceServices TransportExpService;
        private readonly ILodgingExperienceService lodgingExperienceService;
        private readonly IFoodExperienceService foodExperienceService;
        private readonly IActivityServices activityServices;
        private readonly IExperiencesDatesServices experiencesDatesServices;
        private readonly SignInManager<Users> signInManager;
        private readonly IHostService hostService;
        private readonly UserManager<Users> userManager;
        private readonly IUserService userService;
        private readonly ApplicationDbContext _db;
        private readonly IPhotoService photoservice;



        public ExperienceController(ApplicationDbContext db, IPhotoService _phoroservice, IUserService _UserService, IExperiencesDatesServices _experiencesDatesServices ,  IFoodExperienceService _foodExperienceService , IActivityServices _activityServices,ILodgingExperienceService _lodgingExperienceService,ITransportExperienceServices _tranExpServ ,IExperienceService _experienceService, UserManager<Users> _userManager, SignInManager<Users> _signInManager, IHostService _hostService)
        {
            _db = db;
            ExperienceService = _experienceService;
            userService = _UserService;
            userManager = _userManager;
            signInManager =_signInManager;
            hostService = _hostService;
            TransportExpService = _tranExpServ;
            lodgingExperienceService = _lodgingExperienceService;
            foodExperienceService = _foodExperienceService;
            activityServices = _activityServices;
            experiencesDatesServices = _experiencesDatesServices;
            photoservice = _phoroservice;

        }
       
        // Experience controllers
        [HttpPost("CreateExperience")]
        public async Task<IActionResult> CreateExperience( ExperienceViewModel model , string id)
        {
            String ExpStatus = "Active";
            if (ModelState.IsValid)
            {
                Experience experience = new Experience
                {
                    Title = model.Title,
                    Location = model.Location,
                    Price = model.Price,
                    ExperienceStatus = ExpStatus,
                    MapLocation = model.MapLocation,
                    PriceUnit = model.PriceUnit,
                    Spots = model.Spots,
                    Theme = model.Theme,
                    SubTheme = model.SubTheme,
                    DatType = model.DatType,
                    DurationDays = model.DurationDays,
                    DurationHours = model.DurationHours,        
                    StartDate = model.StartDate,
                    EndDate = model.EndDate,
                    Season = model.Season,
                    Description = model.Description,
                    FoodExist = model.FoodExist,
                    LodgingExist = model.LodgingExist,
                    TransportExist = model.TransportExist,
                    PetsAllowed = model.PetsAllowed,
                    MinAge = model.MinAge,
                    OtherCritics = model.OtherCritics,
                    HostId = id,
                };
                var result = await ExperienceService.InsertExperience(experience);
                return Ok(result);

            }
            return StatusCode(StatusCodes.Status200OK);

        }
        [HttpPut("UpdateExperience")]
        public async Task<ActionResult<EditExperienceViewModel>> Editexperience(EditExperienceViewModel model, Guid id)
        {

            var experience = await ExperienceService.FindExperienceById(id);
            Console.WriteLine(" Experience : {0}", experience);
            if (experience == null)
            {
                return NotFound("experience not found");
            }
            else
            {

                experience.Title = model.Title;
                experience.Location = model.Location;
                experience.ExperienceStatus = model.ExperienceStatus;
                experience.Price = model.Price;
                experience.PriceUnit = model.PriceUnit;
                experience.MapLocation = model.MapLocation;
                experience.Spots = model.Spots;
                experience.Theme = model.Theme;
                experience.SubTheme = model.SubTheme;
                experience.DatType = model.DatType;
                experience.DurationDays = model.DurationDays;
                experience.DurationHours = model.DurationHours;
                experience.StartDate = model.StartDate;
                experience.EndDate = model.EndDate;


            }
            await ExperienceService.UpdateExperienceAsync(id, experience);

            return new EditExperienceViewModel()
            {

                Title = model.Title,
                Location = model.Location,
                ExperienceStatus = model.ExperienceStatus,
                Price = model.Price,
                PriceUnit = model.PriceUnit,
                MapLocation = model.MapLocation,
                Spots = model.Spots,
                Theme = model.Theme,
                SubTheme = model.SubTheme,
                DatType = model.DatType,
                DurationDays = model.DurationDays,
                DurationHours = model.DurationHours,
                StartDate = model.StartDate,
                EndDate = model.EndDate,

            };
        }
        [HttpDelete("DeleteExperienceById/{id}")]
        public async Task<ActionResult> DeleteExperience(Guid id)
        {

            var exp = await ExperienceService.FindExperienceById(id);

            if (exp == null)
            {
                return BadRequest("NotFound");
            }

            else
            {
              await ExperienceService.DeleteExperience(id);

             return StatusCode(StatusCodes.Status200OK);

            }
        }
        [HttpGet("GetExperienceById/{id}")]
        public async Task<ActionResult<Experience>> GetExperienceById(Guid id)
        {
            return await ExperienceService.FindExperienceById(id);
        }
        [HttpGet("GetAllExperiences")]
        public IActionResult GetAllExperiences()

        {
            var list = ExperienceService.GetAllExperiences();

            return Ok(list);
        }
        [HttpGet("GetAllHostsExperiences/{id}")]
        public async Task <IActionResult> GetAllHostsExperiences(string id)

        {
            var list = await ExperienceService.GetAllHostExperiences(id);

            return Ok(list);
        }
        [HttpGet("GetAllActiveExperiences")]
        public async Task<IActionResult> GetAllActiveExperiences()

        {
            var list = await ExperienceService.GetActiveExperiences();

            return Ok(list);
        }
        [HttpGet("GetAllValidExperiences")]
        public async Task<IActionResult> GetAllValidExperiences()

        {
            var list = await ExperienceService.GetValidExperiences();

            return Ok(list);
        }

        // Transport Services
        [HttpPost("AddTransport")]
        public async Task <IActionResult> AddTransportToExperience (TransportExperienceViewModel model, Guid expId)
        {
            if (ModelState.IsValid)
            {
                TransportExperience experience = new TransportExperience
                {
                   VehiculeName = model.VehiculeName,
                   Seats = model.Seats,
                   ToGoFrom = model.ToGoFrom,
                   ToGoTo = model.ToGoTo,
                   ToGoToArrival = model.ToGoToArrival,
                   ToGoFromDeparture = model.ToGoFromDeparture,
                   ToReturnFrom = model.ToReturnFrom,
                   ToReturnTo = model.ToReturnTo,
                   ToReturnFromDeparture = model.ToReturnFromDeparture,
                   ToReturnToArrival = model.ToReturnToArrival,
                   Description = model.Description,                 
                   ExperienceId = expId,

                };
                var result = await TransportExpService.InsertTransportExperience(experience);

                return Ok(result);

            }
            return StatusCode(StatusCodes.Status200OK);

        }
        [HttpGet("GetAllTransportExperiences")]
        public IActionResult GetAllTransportExperiences()

        {
            var list = TransportExpService.GetAllTransportsExperiences();

            return Ok(list);
        }
        [HttpGet("GetTransportForSpecificExperience")]
        public async Task<IActionResult> GetTransportForExperience(Guid ExpId)

        {
            var list = await TransportExpService.GetTransportExperiences(ExpId);

            return Ok(list);
        }

        [HttpDelete("DeleteTransportExpById")]
        public async Task<ActionResult> DeleteTransportExpById(Guid Transid)
        {

            var exp = await TransportExpService.FindTransportByExperience(Transid);

            if (exp == null)
            {
                return BadRequest("NotFound");
            }
            else
            {
                await TransportExpService.DeleteTransportExperience(Transid);
                return StatusCode(StatusCodes.Status200OK);

            }
        }

        // Lodging Services

        [HttpPost("AddLodging")]
        public async Task<IActionResult> AddLodging(LodgingExperienceViewModel model, Guid expId)
        {
            if (ModelState.IsValid)
            {
                LodgingExperience experience = new LodgingExperience
                {
                   Category = model.Category,
                   Type = model.Type,
                   Adress = model.Adress,
                   Description = model.Description,
                   Instructions = model.Instructions,
                   Criteria = model.Criteria,
                   StartDate = model.StartDate,
                   EndDate = model.EndDate,
                   ExperienceId = expId,

                };
                var result = await lodgingExperienceService.InsertLodgingExperience(experience);

                return Ok(result);

            }
            return StatusCode(StatusCodes.Status200OK);

        }
        [HttpGet("GetAllLodgingExperiences")]
        public IActionResult GetAllLodgingExperiences()

        {
            var list = lodgingExperienceService.GetAllLodgingExperiences();

            return Ok(list);
        }
        [HttpGet("GetLodgingForSpecificExperience")]
        public async Task<IActionResult> GetLodgingForSpecificExperience(Guid ExpId)

        {
            var list = await lodgingExperienceService.GetLodgingExperiences(ExpId);

            return Ok(list);
        }
        [HttpDelete("DeleteLodgingExpById")]
        public async Task<ActionResult> DeleteLodgingExpById(Guid lodgid)
        {

            var exp = await lodgingExperienceService.FindLodgingByExperience(lodgid);

            if (exp == null)
            {
                return BadRequest("NotFound");
            }
            else
            {
                await lodgingExperienceService.DeleteLodgingExperience(lodgid);
                return StatusCode(StatusCodes.Status200OK);

            }
        }
        // Food Services
        [HttpPost("AddFood")]
        public async Task<IActionResult> AddFood(FoodExperienceViewModel model, Guid expId)
        {
            if (ModelState.IsValid)
            {
                FoodExperience experience = new FoodExperience
                {
                    NameDish = model.NameDish,
                    Description = model.Description,
                    ExperienceId = expId,

                };
                var result = await foodExperienceService.InsertFoodExperience(experience);

                return Ok(result);

            }
            return StatusCode(StatusCodes.Status200OK);

        }
        [HttpGet("GetAllFoodExperiences")]
        public IActionResult GetAllFoodExperiences()

        {
            var list = foodExperienceService.GetAllFoodExperiences();

            return Ok(list);
        }
        [HttpGet("GetFoodForSpecificExperience")]
        public async Task<IActionResult> GetFoodForSpecificExperience(Guid ExpId)

        {
            var list = await foodExperienceService.GetFoodExperiences(ExpId);

            return Ok(list);
        }
        [HttpDelete("DeleteFoodExpById")]
        public async Task<ActionResult> DeleteFoodExpById(Guid foodid)
        {

            var exp = await foodExperienceService.FindFoodByExperience(foodid);

            if (exp == null)
            {
                return BadRequest("NotFound");
            }
            else
            
                await foodExperienceService.DeleteFoodExperience(foodid);
                return StatusCode(StatusCodes.Status200OK);
            }

        // Activity 
        [HttpPost("AddActivity")]
        public async Task<IActionResult> AddActivity(ActivityViewModel model, Guid expId)
        {
            if (ModelState.IsValid)
            {
                Activity experience = new Activity
                {
                    StartDate = model.StartDate,
                    EndDate = model.EndDate,
                    StartTime = model.StartTime,
                    EndTime = model.EndTime,
                    Description = model.Description,
                    Title = model.Title,
                    ExperienceId = expId,
                    
                };
                var result = await activityServices.InsertActivity(experience);

                return Ok(result);

            }
            return StatusCode(StatusCodes.Status200OK);
        }
        [HttpGet("GetAlActivityExperiences")]
        public IActionResult GetAlActivityExperiences()

        {
            var list = activityServices.GetAllActivity();

            return Ok(list);
        }
        [HttpGet("GetActivityForSpecificExperience")]
        public async Task<IActionResult> GetActivityForSpecificExperience(Guid ExpId)

        {
            var list = await activityServices.GetActivitys(ExpId);

            return Ok(list);
        }

        [HttpDelete("DeleteActivityExpById")]
        public async Task<ActionResult> DeleteActivityExpById(Guid activId)
        {

            var exp = await activityServices.FindActivityByExperience(activId);

            if (exp == null)
            {
                return BadRequest("NotFound");
            }
            else

                await activityServices.DeleteActivity(activId);
            return StatusCode(StatusCodes.Status200OK);
        }
        [HttpPost("AddPExphoto")]
        public async Task<ActionResult<PhotosViewModel>> AddPhoto(IFormFile file, Guid ExperienceID)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var experience = await ExperienceService.FindExperienceById(ExperienceID);
            //return Ok(experience.ExperienceId);
            if (experience.Photos == null || experience.Photos.Count == 0)
            {
                var result = await photoservice.InsertExperiencePhotos(file);
                if (result.Error != null)
                    return BadRequest(StatusCodes.Status404NotFound);

                var photo = new Photo
                {

                    Url = result.SecureUrl.AbsoluteUri,
                    PublicId = result.PublicId,
                    IsMain = false,
                    TypeFile = "Experience Picture",
                    ExperienceIDFK = ExperienceID,
                };
                await photoservice.InsertPhoto(photo);

                // experience.PhotoLink = photo.Url.ToString();
                // experience.Photos = photo;
                // await userManager.UpdateAsync(user);
                // await photoservice.InsertPhoto(photo);

            }

            return StatusCode(StatusCodes.Status200OK);

        }
        [HttpPost("AddActPhoto")]
        public async Task<ActionResult<PhotosViewModel>> AddActPhoto(IFormFile file, Guid activityId)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            var activ = await activityServices.FindActivityById(activityId);
            //return Ok(experience.ExperienceId);
            if (activ.Activityphoto == null || activ.Activityphoto.Count == 0)
            {
                var result = await photoservice.InsertActivityPhotos(file);
                if (result.Error != null)
                    return BadRequest(StatusCodes.Status404NotFound);

                var photo = new Photo
                {

                    Url = result.SecureUrl.AbsoluteUri,
                    PublicId = result.PublicId,
                    IsMain = false,
                    TypeFile = "Activity Picture",
                    ActivitiyId = activityId,
                };
                await photoservice.InsertPhoto(photo);

                // experience.PhotoLink = photo.Url.ToString();
                // experience.Photos = photo;
                // await userManager.UpdateAsync(user);
                // await photoservice.InsertPhoto(photo);

            }

            return StatusCode(StatusCodes.Status200OK);

        }


    }
}

