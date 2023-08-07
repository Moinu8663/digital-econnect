using AccountService.Exceptions;
using AccountService.models;
using System;
using System.Security.Principal;
using System.Transactions;

namespace AccountService.Repository
{
    public class AccountRepo : IAccountRepo
    {
        private readonly AccountDBContext Acccontext;
        public AccountRepo(AccountDBContext acccontext)
        {
            this.Acccontext = acccontext;
        }

        public void AddAccount(account account)
        {
            Acccontext.Accounts.Add(account);
            Acccontext.SaveChanges();
        }

        public void DeleteAccount(int Account_No)
        {
            var ac = GetAccountByAccountNo(Account_No);
            Acccontext.Accounts.Remove(ac);
            Acccontext.SaveChanges();
        }

        public account GetAccountByAccountNo(int Account_No)
        {
            return Acccontext.Accounts.Where(a => a.Account_No == Account_No).FirstOrDefault();
        }

        public List<account> GetAccounts()
        {
            return Acccontext.Accounts.ToList();
        }

        public void UpdateAccount(int Account_No, account account)
        {
            var ac = GetAccountByAccountNo(Account_No);
            ac.Name = account.Name;
            ac.Balance = account.Balance;
            ac.Email = account.Email;
            ac.City = account.City;
            ac.MobileNo = account.MobileNo;
            Acccontext.SaveChanges();
        }

        
    }
}


