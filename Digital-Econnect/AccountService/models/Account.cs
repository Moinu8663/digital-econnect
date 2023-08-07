using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AccountService.models
{
    public class account
    {

        [Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Account_No { get; set; } //primary key 
        public string Name { get; set; }
        public int Balance { get; set; }
        [Required]

        public string Email { get; set; } // unique constraint
        public string City { get; set; }
        public string MobileNo { get; set; }

    }
}
