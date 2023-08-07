using Microsoft.AspNetCore.Mvc;
using UserService.Models;
using UserService.Repository;
using UserService.Services;

namespace UserService.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepo userRepository;
        private readonly ITokenGenerator tokenservice;
        public UserController(IUserRepo userRepository, ITokenGenerator toekn)
        {
            this.userRepository = userRepository;
            this.tokenservice = toekn;
        }
        // Inject IUserRepository


        [HttpPost]
        [Route("Register")]
        public IActionResult RegisterUser(User user)
        {
            // Call the RegisterUser method of UserRepository class
            // Return the result
            userRepository.RegisterUser(user);
            return Ok("User Registerd Successfully");

        }




        [HttpPost]
        [Route("Login")]
        public IActionResult LoginUser(User user)
        {
            // Call the LoginUser method of UserRepository class
            // Return the result
            var userobj = userRepository.LoginUser(user);
            if (userobj != null)
            {
                return Ok(tokenservice.GenerateToken(userobj.Email, userobj.Password));
            }
            else
            {
                return BadRequest("Invalid Credentials");
            }
        }

    }
}
