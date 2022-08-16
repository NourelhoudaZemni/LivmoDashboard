using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System;

namespace DataLayer.Models
{
    public static class ModelBuilderExtension
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            Guid AdminId = Guid.NewGuid();
            Guid ClientId = Guid.NewGuid();
            Guid HostId = Guid.NewGuid();
            Guid CommercantId = Guid.NewGuid();

            Guid AdminConcurrencyStamp = Guid.NewGuid();
            Guid HostConcurrencyStamp = Guid.NewGuid();
            Guid ClientIdConcurrencyStamp = Guid.NewGuid();
            Guid CommercantIdConcurrencyStamp = Guid.NewGuid();


            modelBuilder.Entity<IdentityRole>().HasData(
                                new IdentityRole()
                                {
                                    Id = AdminId.ToString(),
                                    Name = "Adminisatrateur",
                                    ConcurrencyStamp = AdminConcurrencyStamp.ToString(),
                                    NormalizedName = "ADMINISTRATEUR"
                                },
                                  new IdentityRole()
                                  {
                                      Id = HostId.ToString(),
                                      Name = "Host",
                                      ConcurrencyStamp = HostConcurrencyStamp.ToString(),
                                      NormalizedName = "HOST"
                                  },
                                    new IdentityRole()
                                    {
                                        Id = ClientId.ToString(),
                                        Name = "Client",
                                        ConcurrencyStamp = ClientIdConcurrencyStamp.ToString(),
                                        NormalizedName = "CLIENT"
                                    },
                                  new IdentityRole()
                                  {
                                      Id = CommercantId.ToString(),
                                      Name = "Commercant",
                                      ConcurrencyStamp = CommercantIdConcurrencyStamp.ToString(),
                                      NormalizedName = "COMMERCANT"
                                  }

                ) ; 
            /*         modelBuilder.Entity<Themes>().HasData(

                        new Themes
                     {
                         ThemeId = "NatureId",
                         Theme = "Nature",
                         ParentId = ""
                     },
                           new Themes
                           {
                               ThemeId = "CmpingId",
                               Theme = "Camping",
                               ParentId = "NatureId"
                           },
                           new Themes
                           {
                               ThemeId = "HickingId",
                               Theme = "HickingId",
                               ParentId = "NatureId"
                           },
                           new Themes
                           {
                               ThemeId = "MealisInNatureId",
                               Theme = "Prepare Meals in Nature",
                               ParentId = "NatureId"
                           },
                           new Themes
                           {
                               ThemeId = "WalkingId",
                               Theme = "Walking",
                               ParentId = "NatureId"
                           },
                           new Themes
                           {
                               ThemeId = "FishingId",
                               Theme = "fishing",
                               ParentId = "NatureId"
                           },
                           new Themes
                           {
                               ThemeId = "BackPakingId",
                               Theme = "BackPaking",
                               ParentId = "NatureId"
                           },
                           new Themes
                           {
                               ThemeId = "SandDinvigId",
                               Theme = "Sand Dinvig",
                               ParentId = "NatureId"
                           },
                           new Themes
                           {
                               ThemeId = "SkiPalmierId",
                               Theme = "Ski Palmier",
                               ParentId = "NatureId"
                           },
                           new Themes
                           {
                               ThemeId = "NightSkyId",
                               Theme = "Night Sky",
                               ParentId = "NatureId"
                           },
                                  new Themes
                                  {
                                      ThemeId = "NightSkyPhotographyId",
                                      Theme = "Night Sky Photography",
                                      ParentId = "NightSkyId"
                                  },
                                  new Themes
                                  {
                                      ThemeId = "AstronomyId",
                                      Theme = "Astronomy",
                                      ParentId = "NightSkyId"
                                  },
                                  new Themes
                                  {
                                      ThemeId = "StargazingId",
                                      Theme = "Stargazing",
                                      ParentId = "NightSkyId"
                                  },
                                  new Themes
                                  {
                                      ThemeId = "NightSkyOthersId",
                                      Theme = "Others",
                                      ParentId = "NightSkyId"
                                  },

                               new Themes
                               {
                                   ThemeId = "NatureAndEcologyTourId",
                                   Theme = "Nature and Ecology Tour",
                                   ParentId = "NatureId"
                               },
                                     new Themes
                                     {
                                         ThemeId = "ExcursioninabayId",
                                         Theme = "Excurtion in a Bay",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursioninacanoteId",
                                         Theme = "Excurtion in a Canote",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursiontothecountrysideId",
                                         Theme = "Excurtion To the COuntrySide",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursiontothemountainId",
                                         Theme = "Excursion to the mountain",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursionintheforestId",
                                         Theme = "Excursion in the forest",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursioninajungleId",
                                         Theme = "Excursion in a jungle",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursioninanationalparkId",
                                         Theme = "Excursion in a National Park",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursiononariverId",
                                         Theme = "Excursion on a River",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "VisittoacaveId",
                                         Theme = "Visit to a Cave",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ShoreExcursionId",
                                         Theme = "Shore Excursion",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursioninadesertId",
                                         Theme = "Excursion in a Desert",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "HotspringvisitId",
                                         Theme = "Hot spring visit",
                                         ParentId = "NatureAndEcologyTourId"
                                     },
                                     new Themes
                                     {
                                         ThemeId = "ExcursiononalakeId",
                                         Theme = "Excursion on a Lake",
                                         ParentId = "NatureAndEcologyTourId"
                                     }, new Themes
                                     {
                                         ThemeId = "OceantripId",
                                         Theme = "Ocean Trip",
                                         ParentId = "NatureAndEcologyTourId"
                                     }, new Themes
                                     {
                                         ThemeId = "ExcursiontoavolcanoId",
                                         Theme = "Excursion to a Volcano",
                                         ParentId = "NatureAndEcologyTourId"
                                     }, new Themes
                                     {
                                         ThemeId = "NatureAndEcologyTourOthersId",
                                         Theme = "Others",
                                         ParentId = "NatureAndEcologyTourId"
                                     },

                               new Themes
                               {
                                   ThemeId = "PlantsAndAgricultureId",
                                   Theme = "- Plants and agriculture",
                                   ParentId = "NatureId"
                               },
                                      new Themes
                                      {
                                          ThemeId = "agricultureId",
                                          Theme = "Agriculture",
                                          ParentId = "PlantsAndAgricultureId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "BotanyId",
                                          Theme = "Botany",
                                          ParentId = "PlantsAndAgricultureId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "PhytotherapyId",
                                          Theme = "Phytotherapy",
                                          ParentId = "PlantsAndAgricultureId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "GardeningId",
                                          Theme = "Gardening",
                                          ParentId = "PlantsAndAgricultureId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "PlantsAndAgricultureOthersId",
                                          Theme = "Others",
                                          ParentId = "PlantsAndAgricultureId"
                                      },

                               new Themes
                               {
                                   ThemeId = "OutdooractivityId",
                                   Theme = "Outdoor activity",
                                   ParentId = "NatureId"
                               },
                               new Themes
                               {
                                   ThemeId = "NatureOthersId",
                                   Theme = "Others",
                                   ParentId = "NatureId"
                               });
                        /*


                         new Themes
                         {
                             ThemeId = "HealthId",
                             Theme = "Health",
                             ParentId = ""
                         },
                                new Themes
                                {
                                    ThemeId = "BeautyId",
                                    Theme = "Beauty",
                                    ParentId = "HealthId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "ConsultationonfragrancesId",
                                          Theme = "Consultation on fragrances",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CourseonhaircareId",
                                          Theme = "Course on Hair Care",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "HairtreatmentandcareId",
                                          Theme = "Hair Treatment and Care",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MakeuplessonsId",
                                          Theme = "Make-up lessons",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MakeupworkshopId",
                                          Theme = "Makeup workshop",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SkincareconsultationId",
                                          Theme = "Skin Care Consultation",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SkincareworkshopId",
                                          Theme = "Skin Care Workshop",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "PerfumeryworkshopId",
                                          Theme = "PerfumeryWorkshop",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "HaircareconsultationId",
                                          Theme = "Hair Care Cnsultation",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MakeupconsultationId",
                                          Theme = "Make-up Consultation",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CourseonskincareId",
                                          Theme = "Course on Skin Care",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SkintreatmentId",
                                          Theme = "Skin treatment",
                                          ParentId = "BeautyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "BeautyOthersId",
                                          Theme = "Others",
                                          ParentId = "BeautyId"
                                      },
                                new Themes
                                {
                                    ThemeId = "SpaId",
                                    Theme = "Spa",
                                    ParentId = "HealthId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "SparitualId",
                                          Theme = "Spa ritual",
                                          ParentId = "SpaId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SpatreatmentId",
                                          Theme = "Spa treatment",
                                          ParentId = "SpaId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SpavisitId",
                                          Theme = "Spa visit",
                                          ParentId = "SpaId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SaunaId",
                                          Theme = "Sauna",
                                          ParentId = "SpaId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SpaworkshopId",
                                          Theme = "Spa workshop",
                                          ParentId = "SpaId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SpaOthersId",
                                          Theme = "Others",
                                          ParentId = "SpaId"
                                      },
                                new Themes
                                {
                                    ThemeId = "MindfulnessId",
                                    Theme = "Mindfulness",
                                    ParentId = "HealthId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "MeditationclassesId",
                                          Theme = "Meditation classes",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MindfulnessCeremonyId",
                                          Theme = "Mindfulness Ceremony",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "BreathingexercisesId",
                                          Theme = "Breathing exercises",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "energyworkId",
                                          Theme = "energy work",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "RageroomId",
                                          Theme = "Rage room",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "StargazingId",
                                          Theme = "Stargazing",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "GatheringinacircleId",
                                          Theme = "Gathering in a circle",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "ForestbathId",
                                          Theme = "Forest bath",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "RelaxationbysoundId",
                                          Theme = "Relaxation by sound",
                                          ParentId = "MindfulnessId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MindfulnessOthersId",
                                          Theme = "Others",
                                          ParentId = "MindfulnessId"
                                      },

                                new Themes
                                {
                                   ThemeId = "BodytherapyId",
                                   Theme = "Body therapy",
                                   ParentId = "HealthId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "TreatmentinbodytherapyId",
                                          Theme = "Treatment in body therapy",
                                          ParentId = "BodytherapyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "BodytherapyworkshopId",
                                          Theme = "Body therapy workshop",
                                          ParentId = "BodytherapyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MassageId",
                                          Theme = "Massage",
                                          ParentId = "BodytherapyId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "OthersBodyTherapyId",
                                          Theme = "Others",
                                          ParentId = "BodytherapyId"
                                      },
                               new Themes
                               { 
                                 ThemeId = "YogaId",
                                 Theme = "Yoga",
                                 ParentId = "HealthId"
                               },
                                      new Themes
                                      {
                                          ThemeId = "YogaCourseId",
                                          Theme = "Yoga Course",
                                          ParentId = "YogaId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "YogaWorkshopId",
                                          Theme = "Yoga Workshop",
                                          ParentId = "YogaId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "OthersYogaId",
                                          Theme = "Others",
                                          ParentId = "YogaId"
                                      },
                               new Themes
                               {
                                   ThemeId = "HolistichealthId",
                                   Theme = "Holistic health",
                                   ParentId = "HealthId"
                               },
                                      new Themes
                                      {
                                          ThemeId = "NutritionworkshopId",
                                          Theme = "Nutrition workshop",
                                          ParentId = "HolistichealthId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "AyurvedatreatmentId",
                                          Theme = "Ayurveda treatment",
                                          ParentId = "HolistichealthId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "NutritioncoursesId",
                                          Theme = "Nutrition courses",
                                          ParentId = "HolistichealthId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "HerbalmedicinetreatmentId",
                                          Theme = "Herbal medicine treatment",
                                          ParentId = "HolistichealthId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "NutritionconsultationId",
                                          Theme = "Nutrition consultation",
                                          ParentId = "HolistichealthId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "TreatmenttraditionalmedicineId",
                                          Theme = "Treatment in traditional medicine",
                                          ParentId = "HolistichealthId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "AyurvedacoursesId",
                                          Theme = "Ayurveda courses",
                                          ParentId = "HolistichealthId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "AyurvedaworkshopId",
                                          Theme = "Ayurveda workshop",
                                          ParentId = "HolistichealthId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "HerbalmedicinecourseId",
                                          Theme = "Herbal medicine course",
                                          ParentId = "HolistichealthId"
                                      }, new Themes
                                      {
                                          ThemeId = "TraditionalmedicinecoursesId",
                                          Theme = "Traditional medicine courses",
                                          ParentId = "HolistichealthId"
                                      }, new Themes
                                      {
                                          ThemeId = "PhytotherapyworkshopId",
                                          Theme = "Phytotherapy workshop",
                                          ParentId = "HolistichealthId"
                                      }, new Themes
                                      {
                                          ThemeId = "TraditionalmedicineworkshopId",
                                          Theme = "Traditional medicine workshop",
                                          ParentId = "HolistichealthId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "HolistichealthOthersId",
                                          Theme = "Others",
                                          ParentId = "HolistichealthId"
                                      },
                               new Themes
                               {
                                   ThemeId = "DivinationId",
                                   Theme = "Divination",
                                   ParentId = "HealthId"
                               },
                                      new Themes
                                      {
                                          ThemeId = "AstrologylessonsId",
                                          Theme = "Astrology lessons",
                                          ParentId = "DivinationId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "AstrologyworkshopId",
                                          Theme = "Astrology workshop",
                                          ParentId = "DivinationId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "• WorkshopontheinterpretationofdreamsId",
                                          Theme = "• Workshop on the interpretation of dreams",
                                          ParentId = "DivinationId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "ClairvoyanceworkshopId",
                                          Theme = "Clairvoyance workshop",
                                          ParentId = "DivinationId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "AstrologyconsultationId",
                                          Theme = "Astrology consultation",
                                          ParentId = "DivinationId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "ConsultationondreaminterpretationId",
                                          Theme = "Consultation on dream interpretation",
                                          ParentId = "DivinationId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "ClairvoyanceconsultationId",
                                          Theme = "Clairvoyance consultation",
                                          ParentId = "DivinationId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "TarotcarddrawId",
                                          Theme = "Tarot card draw",
                                          ParentId = "DivinationId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "DivinationOthersId",
                                          Theme = "Others",
                                          ParentId = "DivinationId"
                                      }, 
                                new Themes
                                {
                                    ThemeId = "HealthOthersId",
                                    Theme = "Others",
                                    ParentId = "HealthId"
                                },
                        new Themes
                        {
                          ThemeId = "FoodId",
                          Theme = "Food",
                          ParentId = ""
                        },
                                new Themes
                                {
                                    ThemeId = "CookingandfoodId",
                                    Theme = "Cooking and food",
                                    ParentId = "FoodId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "PastrylessonsId",
                                          Theme = "Pastry lessons",
                                          ParentId = "CookingandfoodId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CanningcourseId",
                                          Theme = "Canning course",
                                          ParentId = "CookingandfoodId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "• ChocolatemakingworkshopId",
                                          Theme = "• Chocolate making workshop",
                                          ParentId = "CookingandfoodId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CourseonfermentationId",
                                          Theme = "Course on fermentation",
                                          ParentId = "CookingandfoodId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "• CoursemanufactureofGastronomictastingId",
                                          Theme = "• Course on the manufacture of Gastronomic tasting",
                                          ParentId = "CookingandfoodId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CourseoncheesemakingId",
                                          Theme = "Course on cheese making",
                                          ParentId = "CookingandfoodId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CookinglessonsId",
                                          Theme = "Cooking lessons",
                                          ParentId = "CookingandfoodId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CoursehandlingknivesId",
                                          Theme = "Course on the handling of knives",
                                          ParentId = "CookingandfoodId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CookingandfoodOtherId",
                                          Theme = "Others",
                                          ParentId = "CookingandfoodId"
                                      },
                                new Themes
                                {
                                    ThemeId = "GastronomictastingId",
                                    Theme = "Gastronomic tasting",
                                    ParentId = "FoodId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "TastingliveoilsId",
                                          Theme = "Tasting of olive oils",
                                          ParentId = "GastronomictastingId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "ChocolatetastingId",
                                          Theme = "Chocolate tasting",
                                          ParentId = "GastronomictastingId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "• CheesetastingId",
                                          Theme = "• Cheese tasting",
                                          ParentId = "GastronomictastingId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "GastronomictastingOthersId",
                                          Theme = "Others",
                                          ParentId = "GastronomictastingId"
                                      },
                               new Themes
                               {
                                   ThemeId = "GroupdinnerId",
                                   Theme = "Group dinner",
                                   ParentId = "FoodId"
                               },
                                      new Themes
                                      {
                                          ThemeId = "BarbecueId",
                                          Theme = "Barbecue",
                                          ParentId = "GroupdinnerId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "BrunchId",
                                          Theme = "Brunch",
                                          ParentId = "GroupdinnerId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "BreakfastId",
                                          Theme = "Breakfast",
                                          ParentId = "GroupdinnerId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "DinnerId",
                                          Theme = "Dinner",
                                          ParentId = "GroupdinnerId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "LunchId",
                                          Theme = "Lunch",
                                          ParentId = "GroupdinnerId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "PicnicId",
                                          Theme = "Picnic",
                                          ParentId = "GroupdinnerId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "GroupdinnerOthersId",
                                          Theme = "Others",
                                          ParentId = "GroupdinnerId"
                                      },
                                new Themes
                                {
                                    ThemeId = "MarketvisitId",
                                    Theme = "Market and gastronomy visit",
                                    ParentId = "FoodId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "VisitfarmId",
                                          Theme = "Visit to a farm",
                                          ParentId = "MarketvisitId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MarketvisitId",
                                          Theme = "Market visit",
                                          ParentId = "MarketvisitId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "Hikes-pickingId",
                                          Theme = "Hikes-picking",
                                          ParentId = "MarketvisitId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MarketvisitOthersId",
                                          Theme = "Others",
                                          ParentId = "MarketvisitId"
                                      },
                                 new Themes
                                 {
                                     ThemeId = "OtherFoodId",
                                     Theme = "Others",
                                     ParentId = "FoodId"
                                 },

                         new Themes
                         {
                             ThemeId = "EventId",
                             Theme = "Event",
                             ParentId = ""
                         },
                                new Themes
                                {
                                    ThemeId = "SportId",
                                    Theme = "Sport",
                                    ParentId = "EventId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "TeamsportId",
                                          Theme = "Team sport",
                                          ParentId = "SportId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CombatsportId",
                                          Theme = "Combat sport",
                                          ParentId = "SportId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "OutdoorsportsId",
                                          Theme = "Outdoor sports",
                                          ParentId = "SportId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MountainsportsId",
                                          Theme = "Mountain sports",
                                          ParentId = "SportId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "AdrenalinesportsId",
                                          Theme = "Adrenaline sports",
                                          ParentId = "SportId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "FitnessId",
                                          Theme = "Fitness",
                                          ParentId = "SportId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "WintersportId",
                                          Theme = "Winter sport",
                                          ParentId = "SportId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "WaterSportsId",
                                          Theme = "Water Sports",
                                          ParentId = "SportId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "CyclingId",
                                          Theme = "Cycling",
                                          ParentId = "SportId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "SportOthersId",
                                          Theme = "Others",
                                          ParentId = "SportId"
                                      },
                                new Themes
                                {
                                    ThemeId = "EntertainmentId",
                                    Theme = "Entertainment",
                                    ParentId = "EventId"
                                },
                                      new Themes
                                      {
                                          ThemeId = "FireworksId",
                                          Theme = "Fireworks",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "ComedyId",
                                          Theme = "Comedy",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "OutdoorsportsId",
                                          Theme = "Outdoor sports",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "GamesId",
                                          Theme = "Games",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MoviesId",
                                          Theme = "Movies",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "SupernaturalId",
                                          Theme = "Supernatural",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "NightlifeId",
                                          Theme = "Night life",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "CircusId",
                                          Theme = "Circus",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "DanceId",
                                          Theme = "Dance",
                                          ParentId = "EntertainmentId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MagicId",
                                          Theme = "Magic",
                                          ParentId = "EntertainmentId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "MusicId",
                                          Theme = "Music",
                                          ParentId = "EntertainmentId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "TheaterId",
                                          Theme = "Theater",
                                          ParentId = "EntertainmentId"
                                      }, 
                                      new Themes
                                      {
                                          ThemeId = "EntertainmentOthersId",
                                          Theme = "Others",
                                          ParentId = "EntertainmentId"
                                      },
                                 new Themes
                                 {
                                     ThemeId = "FestivalsId",
                                     Theme = "Entertainment",
                                     ParentId = "EventId"
                                 },
                                      new Themes
                                      {
                                          ThemeId = "KerkennahOctopusFestivalId",
                                          Theme = "Kerkennah Octopus Festival",
                                          ParentId = "FestivalsId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "MusicfestivalId",
                                          Theme = "Music festival",
                                          ParentId = "FestivalsId"
                                      },
                                      new Themes
                                      {
                                          ThemeId = "FestivalsOthersId",
                                          Theme = "Others",
                                          ParentId = "FestivalsId"
                                      },
                                new Themes
                                {
                                    ThemeId = "OthersEventId",
                                    Theme = "Others",
                                    ParentId = "EventId"
                                },

                         new Themes
                         {
                             ThemeId = "CultureId",
                             Theme = "Culture",
                             ParentId = ""
                         },
                                new Themes
                                {
                                    ThemeId = "CourseonentrepreneurshipId",
                                    Theme = "Course on entrepreneurship",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "CulturalConferenceId",
                                    Theme = "Cultural Conference",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "LanguagecourseId",
                                    Theme = "Language course",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "FactoryvisitId",
                                    Theme = "Factory visit",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "CountrysidevisitId",
                                    Theme = "Countryside visit",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "culturalactivityId",
                                    Theme = "Cultural Activity",
                                    ParentId = "CultureId"
                                },
                                new Themes
                                {
                                    ThemeId = "SciencelessonsId",
                                    Theme = "Science lessons",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "ConferenceonsocialissuesId",
                                    Theme = "Conference on social issues",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "CulturaldanceId",
                                    Theme = "Cultural dance",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "CulturalvisitId",
                                    Theme = "Cultural visit",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "OfficevisitId",
                                    Theme = "Office visit",
                                    ParentId = "CultureId"
                                }, 
                                new Themes
                                {
                                    ThemeId = "CulturalFestivalId",
                                    Theme = "Cultural Festival",
                                    ParentId = "CultureId"
                                }, new Themes
                                {
                                    ThemeId = "TraditionalweddingId",
                                    Theme = "Traditional wedding",
                                    ParentId = "CultureId"
                                }, new Themes
                                {
                                    ThemeId = "TraditionaltattooId",
                                    Theme = "Traditional tattoo",
                                    ParentId = "CultureId"
                                }, new Themes
                                {
                                    ThemeId = "experiencewithfamilyId",
                                    Theme = "Experience with a family",
                                    ParentId = "CultureId"
                                }, new Themes
                                {
                                    ThemeId = "OtherCultureId",
                                    Theme = "Others",
                                    ParentId = "CultureId"
                                },






                               new Themes
                               {
                                   ThemeId = "FoodId",
                                   Theme = " Football",
                                   ParentId = "Sport"
                               }
                               );
                        */
        }
    }
}

