using UserService.Models;

namespace UserService.Repository
{
    public class UserRepo : IUserRepo
    {
        private readonly UserDbContext dbcontext1;
        public UserRepo(UserDbContext dbcontext)
        {
            this.dbcontext1 = dbcontext;
        }
        public User LoginUser(User user)
        {
            var userobj = dbcontext1.Users.Where(u => u.Email == user.Email && u.Password == user.Password).FirstOrDefault();
            return userobj;

        }



        public void RegisterUser(User user)
        {
            dbcontext1.Users.Add(user);
            dbcontext1.SaveChanges();

        }
    }
}

