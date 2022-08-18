﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class TransportService
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid TransportId { get; set; }
        public string Activity { get; set; }
        public string VehuculeName { get; set; }
        public string Gouvernorate { get; set; }
        public int NumberOfSeatd { get; set; }
        public string VehiculeRules { get; set; }
        public decimal PricePerDay { get; set; }
        public string Type { get; set; }
        [DefaultValue(false)]
        //Admin approval !
        public Boolean IsValid { get; set; }

        [ForeignKey(nameof(Users))]
        [Column("CommercantId")]
        [Required]
        public string CommercantId { get; set; }
        public Commercant Commercant { get; set; }

        public virtual ICollection<Photo> Transportphoto { get; set; }
    }
}
