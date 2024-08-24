using Microsoft.AspNetCore.Mvc;
using EventManagementSystem.Models;
using System.Collections.Generic;
using System.Linq;

namespace EventManagementSystem.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private static List<Event> _events = new List<Event>();

        // GET: api/events
        [HttpGet]
        public ActionResult<IEnumerable<Event>> GetEvents(string sortBy = "date")
        {
            var sortedEvents = sortBy == "date"
                ? _events.OrderBy(e => e.Date)
                : _events.OrderBy(e => e.Title);

            return Ok(sortedEvents);
        }

        // POST: api/events
        [HttpPost]
        public ActionResult<Event> CreateEvent([FromBody] Event newEvent)
        {
            if (_events.Count(e => e.CreatedBy == newEvent.CreatedBy) >= newEvent.MaxParticipants)
                return BadRequest("Event is full.");

            _events.Add(newEvent);
            return CreatedAtAction(nameof(GetEvents), new { id = newEvent.EventId }, newEvent);
        }

        // PUT: api/events/5
        [HttpPut("{id}")]
        public IActionResult UpdateEvent(int id, [FromBody] Event updatedEvent)
        {
            var existingEvent = _events.FirstOrDefault(e => e.EventId == id);
            if (existingEvent == null || existingEvent.CreatedBy != updatedEvent.CreatedBy)
                return NotFound();

            existingEvent.Title = updatedEvent.Title;
            existingEvent.Description = updatedEvent.Description;
            existingEvent.Date = updatedEvent.Date;
            existingEvent.MaxParticipants = updatedEvent.MaxParticipants;

            return NoContent();
        }

        // DELETE: api/events/5
        [HttpDelete("{id}")]
        public IActionResult DeleteEvent(int id)
        {
            var eventToRemove = _events.FirstOrDefault(e => e.EventId == id);
            if (eventToRemove == null)
                return NotFound();

            _events.Remove(eventToRemove);
            return NoContent();
        }
    }
}
