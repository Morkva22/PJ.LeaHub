using Microsoft.AspNetCore.Mvc;
using testlea.Models;
using testlea.Services;

namespace testlea.Controllers;

[ApiController]
[Route("api/[controller]")]
public class BookingController : ControllerBase
{
    private readonly BookingService _bookingService;
    private readonly ILogger<BookingController> _logger;

    public BookingController(BookingService bookingService, ILogger<BookingController> logger)
    {
        _bookingService = bookingService;
        _logger = logger;
    }

    [HttpPost]
    public async Task<ActionResult<BookingResponse>> CreateBooking([FromBody] BookingRequest request)
    {
        _logger.LogInformation($"Received booking request for {request.FirstName} {request.LastName}");

        if (!ModelState.IsValid)
        {
            return BadRequest(new BookingResponse
            {
                Success = false,
                Message = "Invalid booking data"
            });
        }

        if (string.IsNullOrWhiteSpace(request.FirstName) || 
            string.IsNullOrWhiteSpace(request.LastName) || 
            string.IsNullOrWhiteSpace(request.Email))
        {
            return BadRequest(new BookingResponse
            {
                Success = false,
                Message = "First name, last name, and email are required"
            });
        }

        var result = await _bookingService.CreateBookingAsync(request);
        
        if (!result.Success)
        {
            return BadRequest(result);
        }

        return Ok(result);
    }

    [HttpGet("available-slots")]
    public async Task<ActionResult<List<AvailableSlot>>> GetAvailableSlots(
        [FromQuery] DateTime? startDate, 
        [FromQuery] DateTime? endDate)
    {
        var start = startDate ?? DateTime.UtcNow.Date;
        var end = endDate ?? DateTime.UtcNow.Date.AddMonths(2);

        _logger.LogInformation($"Getting available slots from {start:yyyy-MM-dd} to {end:yyyy-MM-dd}");

        var slots = await _bookingService.GetAvailableSlotsAsync(start, end);
        return Ok(slots);
    }

    [HttpGet("check-availability")]
    public async Task<ActionResult<bool>> CheckAvailability(
        [FromQuery] DateTime date, 
        [FromQuery] string time)
    {
        if (string.IsNullOrWhiteSpace(time))
        {
            return BadRequest("Time is required");
        }

        var slots = await _bookingService.GetAvailableSlotsAsync(date.Date, date.Date);
        var slot = slots.FirstOrDefault(s => s.Date.Date == date.Date);
        
        return Ok(slot?.AvailableTimes.Contains(time) ?? false);
    }
}