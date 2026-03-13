using System;
using Microsoft.AspNetCore.Mvc;
using LeothWeb.Models;

namespace LeothWeb.Controllers
{
    public class GuestbookController : Controller
    {
        private readonly AppDbContext _context;

        public GuestbookController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Add(string name, string message)
        {
            var m = new GuestMessage
            {
                Name = name,
                Message = message,
                Time = DateTime.Now
            };

            _context.GuestMessages.Add(m);
            _context.SaveChanges();

            return RedirectToAction("Index", "Home");
        }
    }
}