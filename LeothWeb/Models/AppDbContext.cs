using LeothWeb.Models;
using Microsoft.EntityFrameworkCore;

namespace LeothWeb.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options)
            : base(options)
        {
        }

        public DbSet<GuestMessage> GuestMessages { get; set; }
    }
}