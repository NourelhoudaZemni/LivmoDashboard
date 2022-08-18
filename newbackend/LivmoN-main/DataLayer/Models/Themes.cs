using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLayer.Models
{
    public class Themes
    {
        [Key]
        public string ThemeId { get; set; }
        public string Theme { get; set; }
        public string ParentId { get; set; }
    }
}
