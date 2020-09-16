using KPBlogIT.Model.Models;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;

namespace KPBlogIT.Data
{
    public class KPBlogITDbContext : IdentityDbContext<ApplicationUser>
    {
        public KPBlogITDbContext() : base("DbConnection")
        {
            this.Configuration.LazyLoadingEnabled = true;
        }

        public static KPBlogITDbContext Create()
        {
            return new KPBlogITDbContext();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
