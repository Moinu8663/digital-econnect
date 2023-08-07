using UserService.Models;

namespace UserService.Repository
{
    public interface IUserRepo
    {
        void RegisterUser(User user);
        User LoginUser(User user);
    }
}