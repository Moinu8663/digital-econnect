using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;


namespace UserService.Services
{
    public class TokenGenerator : ITokenGenerator
    {

        public string GenerateToken(string email, string password)
        {

            //1. Create the claims
            var claims = new[] { new Claim("Email", email) }; //payload

            //2. Create ur secret key, and also the Hashing Algorithm (Signing Credentials)
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("diwakarishereanandrathijodhpur"));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            //3. Create the token
            var token = new JwtSecurityToken(
                issuer: "authapidiwakar",
                audience: "userapi",
                claims: claims,
                signingCredentials: credentials,
                expires: System.DateTime.Now.AddMinutes(30)
                );

            var response = new
            {
                token = new JwtSecurityTokenHandler().WriteToken(token)
            };
            return JsonConvert.SerializeObject(response);
        }
    }
}

