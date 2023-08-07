using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserService.Models
{
    public class User
    {
        [Key]
        public string Email { get; set; } // Make Email property the primary key

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int UserId { get; set; } // Set UserId to auto-increment starting from 100

        public string? Firstname { get; set; }
        public string? Lastname { get; set; }
        public string? City { get; set; }

        public string Password { get; set; }

        public string? MobileNo { get; set; } // Add the MobileNo property
    }
}


