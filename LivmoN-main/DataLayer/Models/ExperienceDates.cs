using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class ExperienceDates
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] 
        public Guid ExperienceDatesId { get; set; }
       
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{hh:mm}")]
        [DataType(DataType.Time)]
        public DateTime StartTime { get; set; }
        
        [DisplayFormat(ApplyFormatInEditMode = true, DataFormatString = "{hh:mm}")]
        [DataType(DataType.Time)]
        public DateTime EndTime { get; set; }

        [ForeignKey(nameof(Experience))]
        [Column("ExperienceId")]
        [Required]
        public Guid ExperienceId { get; set; }
        public Experience Experience { get; set; }

        

    }
}
