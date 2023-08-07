using AccountService.Exceptions;
using AccountService.models;
using AccountService.Services;
using Microsoft.AspNetCore.Mvc;

namespace AccountService.controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class Accountcontroller : ControllerBase
    {
        private readonly IAccountServices services;
        public Accountcontroller(IAccountServices services)
        {
            this.services = services;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(services.GetAccounts());
        }
        [HttpGet("{Account_No}")]
        public IActionResult Get(int Account_No)
        {
            try
            {
                return Ok(services.GetAccountByAccountNo(Account_No));
            }
            catch (AccountNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] account account)
        {
            try
            {
                services.AddAccount(account);
                return StatusCode(201, "New account Added");
            }
            catch (AccountAlreadyExistsException ex)
            {
                return Conflict(ex.Message);
            }
        }
        [HttpPut("{Account_No}")]
        public IActionResult Put(int Account_No, account account)
        {
            try
            {
                services.UpdateAccount(Account_No, account);
                return StatusCode(200, "Account Updated successfully");
            }
            catch (AccountNotFoundException ex)
            {
                return NotFound(ex.Message);
            }

        }
        [HttpDelete("{Account_No}")]
        public IActionResult Delete(int Account_No)
        {
            try
            {
                services.DeleteAccount(Account_No);
                return StatusCode(200, "Account delete successfully");
            }
            catch (AccountNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
