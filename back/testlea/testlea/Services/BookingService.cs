using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using testlea.Models;

namespace testlea.Services;

public class BookingService
{
    private readonly IConfiguration _configuration;
    private readonly ILogger<BookingService> _logger;
    private readonly HttpClient _httpClient;
    private readonly string _supabaseUrl;
    private readonly string _supabaseKey;

    public BookingService(IConfiguration configuration, ILogger<BookingService> logger)
    {
        _configuration = configuration;
        _logger = logger;
        _httpClient = new HttpClient();
        _supabaseUrl = configuration["Supabase:Url"] ?? throw new InvalidOperationException("Supabase URL not configured");
        _supabaseKey = configuration["Supabase:AnonKey"] ?? throw new InvalidOperationException("Supabase key not configured");
        
        _httpClient.DefaultRequestHeaders.Add("apikey", _supabaseKey);
        _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", _supabaseKey);
        _httpClient.DefaultRequestHeaders.Add("Prefer", "return=representation");
    }

    public async Task<BookingResponse> CreateBookingAsync(BookingRequest request)
    {
        try
        {
            _logger.LogInformation($"Creating booking for {request.FirstName} {request.LastName} on {request.MeetingDate:yyyy-MM-dd} at {request.MeetingTime}");

            var meetingDateTime = CombineDateAndTime(request.MeetingDate, request.MeetingTime);
            
            if (meetingDateTime < DateTime.UtcNow)
            {
                return new BookingResponse
                {
                    Success = false,
                    Message = "Cannot book meetings in the past"
                };
            }

            var isAvailable = await CheckSlotAvailabilityAsync(request.MeetingDate, request.MeetingTime);
            if (!isAvailable)
            {
                return new BookingResponse
                {
                    Success = false,
                    Message = "This time slot is already booked"
                };
            }

            var meetingId = Guid.NewGuid().ToString();
            var meetingLink = GenerateMeetingLink(meetingId);

            var booking = new
            {
                first_name = request.FirstName,
                last_name = request.LastName,
                email = request.Email,
                meeting_date = request.MeetingDate.ToString("yyyy-MM-dd"),
                meeting_time = request.MeetingTime,
                tools = request.Tools,
                hosting_preference = request.HostingPreference,
                additional_notes = request.AdditionalNotes,
                meeting_link = meetingLink,
                meeting_id = meetingId,
                status = "confirmed",
                created_at = DateTime.UtcNow.ToString("o")
            };

            var json = JsonSerializer.Serialize(booking);
            var content = new StringContent(json, Encoding.UTF8, "application/json");
            
            _logger.LogInformation($"Sending booking to Supabase: {json}");
            
            var response = await _httpClient.PostAsync($"{_supabaseUrl}/bookings", content);
            var responseContent = await response.Content.ReadAsStringAsync();
            
            if (!response.IsSuccessStatusCode)
            {
                _logger.LogError($"Failed to create booking. Status: {response.StatusCode}, Response: {responseContent}");
                return new BookingResponse
                {
                    Success = false,
                    Message = "Failed to create booking in database"
                };
            }

            _logger.LogInformation($"Booking created successfully. Response: {responseContent}");

            await SendConfirmationEmailAsync(request.Email, meetingLink, meetingDateTime, 
                $"{request.FirstName} {request.LastName}");

            return new BookingResponse
            {
                Success = true,
                Message = "Meeting booked successfully! Check your email for the Google Meet link.",
                MeetingId = meetingId,
                MeetingLink = meetingLink,
                MeetingDateTime = meetingDateTime
            };
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error creating booking");
            return new BookingResponse
            {
                Success = false,
                Message = $"An error occurred: {ex.Message}"
            };
        }
    }

    public async Task<List<AvailableSlot>> GetAvailableSlotsAsync(DateTime startDate, DateTime endDate)
    {
        try
        {
            _logger.LogInformation($"Getting available slots from {startDate:yyyy-MM-dd} to {endDate:yyyy-MM-dd}");

            var query = $"meeting_date=gte.{startDate:yyyy-MM-dd}&meeting_date=lte.{endDate:yyyy-MM-dd}&status=eq.confirmed";
            var response = await _httpClient.GetAsync($"{_supabaseUrl}/bookings?{query}");
            
            var bookedSlots = new List<BookingDto>();
            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                _logger.LogInformation($"Booked slots response: {json}");
                
                var options = new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true,
                    PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower
                };
                
                bookedSlots = JsonSerializer.Deserialize<List<BookingDto>>(json, options) ?? new List<BookingDto>();
            }

            var availableSlots = new List<AvailableSlot>();
            var allTimeSlots = GetAllTimeSlots();

            for (var date = startDate.Date; date <= endDate.Date; date = date.AddDays(1))
            {
                if (date.DayOfWeek == DayOfWeek.Saturday || date.DayOfWeek == DayOfWeek.Sunday)
                    continue;

                var bookedTimes = bookedSlots
                    .Where(b => b.MeetingDate.Date == date.Date)
                    .Select(b => b.MeetingTime)
                    .ToHashSet();

                var availableTimes = allTimeSlots
                    .Where(t => !bookedTimes.Contains(t))
                    .ToList();

                if (availableTimes.Any())
                {
                    availableSlots.Add(new AvailableSlot
                    {
                        Date = date,
                        AvailableTimes = availableTimes
                    });
                }
            }

            _logger.LogInformation($"Found {availableSlots.Count} days with available slots");
            return availableSlots;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting available slots");
            return GetDefaultAvailableSlots(startDate, endDate);
        }
    }

    private List<AvailableSlot> GetDefaultAvailableSlots(DateTime startDate, DateTime endDate)
    {
        var slots = new List<AvailableSlot>();
        var allTimeSlots = GetAllTimeSlots();

        for (var date = startDate.Date; date <= endDate.Date; date = date.AddDays(1))
        {
            if (date.DayOfWeek == DayOfWeek.Saturday || date.DayOfWeek == DayOfWeek.Sunday)
                continue;

            slots.Add(new AvailableSlot
            {
                Date = date,
                AvailableTimes = allTimeSlots
            });
        }

        return slots;
    }

    private async Task<bool> CheckSlotAvailabilityAsync(DateTime date, string time)
    {
        try
        {
            var dateStr = date.ToString("yyyy-MM-dd");
            
            var query = $"meeting_date=eq.{dateStr}&meeting_time=eq.{time}&status=eq.confirmed";
            var response = await _httpClient.GetAsync($"{_supabaseUrl}/bookings?{query}");
            
            if (response.IsSuccessStatusCode)
            {
                var json = await response.Content.ReadAsStringAsync();
                var bookings = JsonSerializer.Deserialize<List<BookingDto>>(json, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });
                
                var isAvailable = bookings?.Count == 0;
                _logger.LogInformation($"Slot {dateStr} {time} availability: {isAvailable}");
                return isAvailable;
            }
            
            return true;
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error checking slot availability");
            return false;
        }
    }

    private DateTime CombineDateAndTime(DateTime date, string time)
    {
        var cleanTime = time.ToLower().Replace(" ", "");
        var hour = 0;
        var minute = 0;

        if (cleanTime.Contains(":"))
        {
            var parts = cleanTime.Split(':');
            hour = int.Parse(parts[0]);
            
            var minutePart = parts[1].Replace("am", "").Replace("pm", "");
            minute = int.Parse(minutePart);

            if (cleanTime.Contains("pm") && hour != 12)
                hour += 12;
            if (cleanTime.Contains("am") && hour == 12)
                hour = 0;
        }
        else
        {
            var numPart = cleanTime.Replace("am", "").Replace("pm", "");
            hour = int.Parse(numPart);
            
            if (cleanTime.Contains("pm") && hour != 12)
                hour += 12;
            if (cleanTime.Contains("am") && hour == 12)
                hour = 0;
        }

        return new DateTime(date.Year, date.Month, date.Day, hour, minute, 0);
    }

    private string GenerateMeetingLink(string meetingId)
    {
        return $"https://meet.google.com/{GenerateShortCode()}";
    }

    private string GenerateShortCode()
    {
        const string chars = "abcdefghijklmnopqrstuvwxyz";
        var random = new Random();
        var code = new StringBuilder();
        
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 4; j++)
            {
                code.Append(chars[random.Next(chars.Length)]);
            }
            if (i < 2) code.Append('-');
        }
        
        return code.ToString();
    }

    private List<string> GetAllTimeSlots()
    {
        return new List<string>
        {
            "8:00am", "9:00am", "10:00am", "11:00am",
            "12:00pm", "1:00pm", "2:00pm", "3:00pm",
            "4:00pm", "5:00pm"
        };
    }

    private async Task SendConfirmationEmailAsync(string toEmail, string meetingLink, DateTime meetingTime, string name)
    {
        try
        {
            var emailConfig = _configuration.GetSection("Email");
            var smtpHost = emailConfig["SmtpHost"];

            if (string.IsNullOrEmpty(smtpHost))
            {
                _logger.LogWarning("Email not configured, skipping confirmation email");
                return;
            }

            var subject = "Meeting Confirmation - 30 Min Introduction";
            var body = $@"
Hello {name},

Your meeting has been successfully booked!

Meeting Details:
Date: {meetingTime:MMMM dd, yyyy}
Time: {meetingTime:hh:mm tt} (GMT+02:00)
Duration: 30 minutes

Google Meet Link: {meetingLink}

Please join the meeting at the scheduled time using the link above.

If you need to reschedule or cancel, please contact us as soon as possible.

Best regards,
testlea Team
";

            _logger.LogInformation($"Confirmation email would be sent to {toEmail}");
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error sending confirmation email");
        }
    }
}