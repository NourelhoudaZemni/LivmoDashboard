using DataLayer.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BagNgo.ViewModels.Implementation
{
    public class HostViewModel
    {
        /// <summary>
        ///  Host Variables
        /// </summary>
        public string PersAContact { get; set; } 
        public string Verified { get; set; } = "en attente";
        [Required]
        public string Telephone { get; set; }
        [Required]
        public string Type { get; set; }
        public string Gouvernorate { get; set; }
        [Required]
        // Nom du personne ou bien du societé !
        public string LegalName { get; set; }
        public string ZipCode { get; set; }
        public long NumCnss { get; set; }
        public long TaxNum { get; set; }
        public string MaleWorkforce { get; set; }
        public string FemaleWorkforce { get; set; }

        /// <summary>
        ///  Users Variables
        /// </summary>
        public string Country { get; set; }
        public string Adresse { get; set; }
        public Photo Photo { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required]
        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password",
            ErrorMessage = "Password and confirmation password do not match.")]
        public string ConfirmPassword { get; set; }
        public string ClientURI { get; set; }

        // Additional Variables


    }
}
