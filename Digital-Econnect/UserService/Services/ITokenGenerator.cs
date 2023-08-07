namespace UserService.Services
{
    public interface ITokenGenerator
    {
        string GenerateToken(string emai, string password);
       // object? GenerateToken(string email, string password);
    }

}
