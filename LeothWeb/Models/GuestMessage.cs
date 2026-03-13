using System;

namespace LeothWeb.Models
{
    public class GuestMessage
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Message { get; set; }

        public DateTime Time { get; set; }
    }
}