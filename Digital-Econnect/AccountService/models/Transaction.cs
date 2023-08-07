using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AccountService.models
{
    public class Transaction
    {
        [Key,DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Transaction_Id { get; set; } //primary key
        [ForeignKey("Account_No")]
        public int Account_No { get; set; }
        public decimal Transaction_Amount { get; set; }
        public DateTime Transaction_Date { get; set; }
        public string Transaction_Type { get; set; }

        
        public account account { get; set; }
    }
}
