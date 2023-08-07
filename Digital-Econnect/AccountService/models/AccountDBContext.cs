using Microsoft.EntityFrameworkCore;

namespace AccountService.models
{
    public class AccountDBContext : DbContext
    {
        public DbSet<account> Accounts { get; set; }
        public DbSet<Transaction> Transactions { get; set; }

        public AccountDBContext(DbContextOptions<AccountDBContext> options) : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasDefaultSchema("digital_econnect");
            modelBuilder.Entity<account>().HasIndex(u => u.Email).IsUnique();
        }
    }
}
