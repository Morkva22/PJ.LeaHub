namespace testlea.Models;

public class BookingRequest
{
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public DateTime MeetingDate { get; set; }
    public string MeetingTime { get; set; } = string.Empty;
    public string? Tools { get; set; }
    public string? HostingPreference { get; set; }
    public string? AdditionalNotes { get; set; }
}

public class BookingResponse
{
    public bool Success { get; set; }
    public string Message { get; set; } = string.Empty;
    public string? MeetingId { get; set; }
    public string? MeetingLink { get; set; }
    public DateTime? MeetingDateTime { get; set; }
}

public class BookingDto
{
    public int Id { get; set; }
    public string FirstName { get; set; } = string.Empty;
    public string LastName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public DateTime MeetingDate { get; set; }
    public string MeetingTime { get; set; } = string.Empty;
    public string? Tools { get; set; }
    public string? HostingPreference { get; set; }
    public string? AdditionalNotes { get; set; }
    public string MeetingLink { get; set; } = string.Empty;
    public string MeetingId { get; set; } = string.Empty;
    public string Status { get; set; } = "confirmed";
    public DateTime CreatedAt { get; set; }
}

public class AvailableSlot
{
    public DateTime Date { get; set; }
    public List<string> AvailableTimes { get; set; } = new();
}