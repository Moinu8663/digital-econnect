using AccountService.Exceptions;
using AccountService.models;
using AccountService.Repository;
using System.Security.Principal;

namespace AccountService.Services
{
    public class AccountServices : IAccountServices
    {
        private readonly IAccountRepo repo;
        private int transactionIdCounter;

        public AccountServices(IAccountRepo repo)
        {
            this.repo = repo;
        }

        public void AddAccount(account account)
        {
            var ac = repo.GetAccountByAccountNo(account.Account_No);
            if (ac == null)
            {
                repo.AddAccount(account);
            }
            else
            {
                throw new AccountAlreadyExistsException($"Account with account no {account.Account_No} already exists");
            }
        }

        public void DeleteAccount(int Account_No)
        {
            var ac = repo.GetAccountByAccountNo(Account_No);
            if (ac == null)
            {
                throw new AccountNotFoundException($"Account with account no {Account_No} not found");
            }
            else
            {
                repo.DeleteAccount(Account_No);
            }
        }

        public account GetAccountByAccountNo(int Account_No)
        {
            var ac = repo.GetAccountByAccountNo(Account_No);
            if (ac == null)
            {
                throw new AccountNotFoundException($"Account with account no {Account_No} not found");
            }
            else
            {
                return repo.GetAccountByAccountNo(Account_No);
            }
        }

        public List<account> GetAccounts()
        {
            return repo.GetAccounts();
        }

        public void UpdateAccount(int Account_No, account account)
        {
            var ac = GetAccountByAccountNo(Account_No);
            if (ac == null)
            {
                throw new AccountNotFoundException($"Account with account no {Account_No} not found");
            }
            else
            {
                repo.UpdateAccount(Account_No, account);
            }
        }
      
    }
}
