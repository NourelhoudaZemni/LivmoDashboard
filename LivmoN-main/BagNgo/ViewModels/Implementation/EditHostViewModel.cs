using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BagNgo.ViewModels.Implementation
{
    public class EditHostViewModel
    {
        public string PersAContact { get; set; }

    public string Verified { get; set; } = "en attente";
        [Required]
        public string Telephone { get; set; }
        [Required]
        public string Gouvernorate { get; set; }
        [Required]
        // Nom du personne ou bien du societé !
        public string LegalName { get; set; }
        public string CINCopy { get; set; }
        public string RNECopy { get; set; }
        public string LicenceCopy { get; set; }
        public string ZipCode { get; set; }
        public long NumCnss { get; set; }
        public long TaxNum { get; set; }
        public string MaleWorkforce { get; set; }
        public string FemaleWorkforce { get; set; }
        public string Country { get; set; }
        public string Adresse { get; set; }

    }
}
