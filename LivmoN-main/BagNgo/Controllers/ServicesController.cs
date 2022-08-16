using BagNgo.ViewModels.Implementation;
using DataLayer.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServicesLayer.ServInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BagNgo.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class ServicesController : Controller
    {
        private readonly ILodgingService lodgingService;
        private readonly ITransportService transportService;
        private readonly IFoodService foodService;

        public ServicesController(ILodgingService _lodgingservice , ITransportService _transportService , IFoodService _foodService)
        {

            lodgingService = _lodgingservice;
            transportService = _transportService;
            foodService = _foodService;
        }
        [HttpPost("CreateLodging")]
        public async Task<IActionResult> CreateLodging( LodgingServiceViewModel model, string id)
        {
            if (ModelState.IsValid)
            {
                LodgingService lodging = new LodgingService
                {
                    IsValid = model.IsValid,
                    LodgingAdress = model.LodgingAdress,
                    LodgingCategory = model.LodgingCategory,
                    LodgingDescript = model.LodgingDescript,
                    LodgingName = model.LodgingName,
                    LodgingType = model.LodgingType,
                    LodgingWebsite = model.LodgingWebsite,
                    PricePerNight =model.PricePerNight,
                    CommercantId = id,

                };
                var result = await lodgingService.InsertLodgingService(lodging);

                return Ok(result);

            }
            return StatusCode(StatusCodes.Status200OK);

        }
        [HttpPost("CreateTransport")]
        public async Task<IActionResult> CreateTransport(TransportServiceViewModel model, string id)
        {
            if (ModelState.IsValid)
            {
                TransportService transport = new TransportService
                {
                  CommercantId = model.CommercantId,
                  Gouvernorate = model.Gouvernorate,
                  IsValid = model.IsValid,
                  PricePerDay = model.PricePerDay,
                  NumberOfSeatd = model.NumberOfSeatd,
                  VehiculeRules = model.VehiculeRules,
                  VehuculeName = model.VehuculeName,
                  Activity = model.Activity,
                  Type = model.Type,
                };
                var result = await transportService.InsertTransportService(transport);

                return Ok(result);

            }
            return StatusCode(StatusCodes.Status200OK);

        }
        [HttpPost("CreateFood")]
        public async Task<IActionResult> CreateFood(FoodServiceViewModel model, string id)
        {
            if (ModelState.IsValid)
            {
                FoodService food = new FoodService
                {
                    Adress = model.Adress,
                    ClosingHour = model.ClosingHour,
                    CommercantId = model.CommercantId,
                    DishDescription = model.DishDescription,
                    DishName = model.DishName,
                    FoodPrice = model.FoodPrice,
                    IsValid = model.IsValid,
                    OpenHour = model.OpenHour,
                    RestaurantName = model.RestaurantName,
                    Rules = model.Rules,
                    Slogan = model.Slogan,
                    Stars = model.Stars,
                    Website = model.Website,
                    RestaurantRules = model.RestaurantRules,
                    DaysOff = model.DaysOff,
                };
                var result = await foodService.InsertFoodService(food);

                return Ok(result);

            }
            return StatusCode(StatusCodes.Status200OK);

        }
       
       
        // Transport 
        [HttpDelete("DeleteTransportById/{id}")]
        public async Task<ActionResult> DeleteTransport(Guid id)
        {

            var exp = await transportService.FindTransportServiceById(id);

            if (exp == null)
            {
                return BadRequest("NotFound");
            }
            else
            {
                await transportService.FindTransportServiceById(id);

                return StatusCode(StatusCodes.Status200OK);

            }
        }
        [HttpGet("GetTransportById/{id}")]
        public async Task<ActionResult<TransportService>> GetTransportByID(Guid id)
        {
            return await transportService.FindTransportServiceById(id);
        }
        [HttpGet("GetAllTransports")]
        public IActionResult GetAllTransports()

        {
            var list = transportService.GetAllTransportServices();

            return Ok(list);
        }
        [HttpGet("GetAllCommercantTransport/{id}")]
        public async Task<IActionResult> GetAllCommercantTransport(string id)

        {
            var list = await transportService.GetAllCommercantTransportServices(id);

            return Ok(list);
        }
        [HttpGet("GetAllValidTransports")]
        public async Task<IActionResult> GetAllValidTransports()

        {
            var list = await transportService.GetValidTransportServices();

            return Ok(list);
        }

        // Lodging 
        [HttpDelete("DeleteLodgingById/{id}")]
        public async Task<ActionResult> DeleteLodging(Guid id)
        {

            var exp = await lodgingService.FindLodgingServiceById(id);

            if (exp == null)
            {
                return BadRequest("NotFound");
            }
            else
            {
                await lodgingService.DeleteLodgingService(id);

                return StatusCode(StatusCodes.Status200OK);

            }
        }
        [HttpGet("GetLodgingById/{id}")]
        public async Task<ActionResult<LodgingService>> GetLodgingByID(Guid id)
        {
            return await lodgingService.FindLodgingServiceById(id);
        }
        [HttpGet("GetAllLodging")]
        public IActionResult GetAllLodging()

        {
            var list = lodgingService.GetAllLodgingServices();

            return Ok(list);
        }
        [HttpGet("GetAllCommercantLodging/{id}")]
        public async Task<IActionResult> GetAllCommercantLodging(string id)

        {
            var list = await lodgingService.GetAllCommercantLodgingServices(id);

            return Ok(list);
        }
        [HttpGet("GetAllValidLodging")]
        public async Task<IActionResult> GetAllValidLodging()

        {
            var list = await lodgingService.GetValidLodgingServices();

            return Ok(list);
        }

        // Food 
        [HttpDelete("DeleteFoodById/{id}")]
        public async Task<ActionResult> DeleteFood(Guid id)
        {

            var exp = await foodService.FindFoodServiceById(id);

            if (exp == null)
            {
                return BadRequest("NotFound");
            }
            else
            {
                await foodService.DeleteFoodService(id);

                return StatusCode(StatusCodes.Status200OK);

            }
        }
        [HttpGet("GetFoodById/{id}")]
        public async Task<ActionResult<FoodService>> GetFoodByID(Guid id)
        {
            return await foodService.FindFoodServiceById(id);
        }
        [HttpGet("GetAllFood")]
        public IActionResult GetAllFood()

        {
            var list = foodService.GetAllFoodServices();

            return Ok(list);
        }
        [HttpGet("GetAllCommercantFood/{id}")]
        public async Task<IActionResult> GetAllCommercantFood(string id)

        {
            var list = await foodService.GetAllCommercantFoodServices(id);

            return Ok(list);
        }
        [HttpGet("GetAllValidFood")]
        public async Task<IActionResult> GetAllValidFood()

        {
            var list = await foodService.GetValidFoodServices();

            return Ok(list);
        }

    }
}
