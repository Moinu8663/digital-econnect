using AccountService.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AccountService.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionController : ControllerBase
    {
        private readonly AccountDBContext Acccontext;
        public TransactionController(AccountDBContext acccontext)
        {
            this.Acccontext = acccontext;
        }
        [HttpGet("{Account_No}")]
        public IActionResult Get(int Account_No)
        {
            var ac = Acccontext.Accounts.FirstOrDefault(a => a.Account_No == Account_No);
            if (ac == null)
            {
                return NotFound();
            }
            return Ok(ac);
        }

    }

}