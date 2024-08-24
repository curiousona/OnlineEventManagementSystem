namespace EventManagementSystem.Models
{
    public class Event
    {
        public int EventId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Date { get; set; }
        public int MaxParticipants { get; set; }
        public int CreatedBy { get; set; }
    }
}
