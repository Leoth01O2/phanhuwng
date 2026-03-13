using LeothWeb.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;
using LeothWeb.Models;

namespace LeothWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly AppDbContext _context;

        public HomeController(AppDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            var messages = _context.GuestMessages
                .OrderByDescending(x => x.Time)
                .ToList();

            return View(messages);
        }
    }
}