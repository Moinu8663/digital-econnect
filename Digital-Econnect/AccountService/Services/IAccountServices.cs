using AccountService.models;
using System.Security.Principal;

namespace AccountService.Services
{
    public interface IAccountServices
    {
        public List<account> GetAccounts();
        public account GetAccountByAccountNo(int Account_No);
        public void AddAccount(account account);
        public void UpdateAccount(int Account_No, account account);
        public void DeleteAccount(int Account_No);

    }
}
