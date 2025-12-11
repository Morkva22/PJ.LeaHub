using Microsoft.AspNetCore.Mvc;
using testlea.Models;
using testlea.Services;

namespace testlea.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private readonly TaskService _taskService;

        public TaskController(TaskService taskService)
        {
            _taskService = taskService;
        }

        private string? GetAccessToken()
        {
            var authHeader = Request.Headers["Authorization"].ToString();
            if (string.IsNullOrWhiteSpace(authHeader) || !authHeader.StartsWith("Bearer "))
                return null;
            
            return authHeader.Replace("Bearer ", "");
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            try
            {
                var token = GetAccessToken();
                var tasks = await _taskService.GetAllTasks(token);
                return Ok(tasks);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> AddTask([FromBody] CreateTaskRequest? request)
        {
            try
            {
                if (request == null)
                    return BadRequest(new { error = "Request body cannot be empty" });

                if (string.IsNullOrWhiteSpace(request.Title))
                    return BadRequest(new { error = "Title is required" });

                if (string.IsNullOrWhiteSpace(request.Status))
                    return BadRequest(new { error = "Status is required" });

                var token = GetAccessToken();
                var task = await _taskService.AddTask(
                    request.Title,
                    request.Status,
                    token,
                    request.Deadline
                );

                if (task == null)
                    return BadRequest(new { error = "Failed to create task. Check RLS policies in Supabase." });

                return Ok(task);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error AddTask: {ex.Message}");
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(long id, [FromBody] UpdateTaskRequest request)
        {
            try
            {
                var token = GetAccessToken();
                var result = await _taskService.UpdateTask(id, token, request.Status, request.Title);

                if (!result)
                    return NotFound(new { error = "Task not found or unauthorized" });

                return Ok(new { success = true, message = "Task updated successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTask(long id)
        {
            try
            {
                var token = GetAccessToken();
                var result = await _taskService.DeleteTask(id, token);

                if (!result)
                    return NotFound(new { error = "Task not found or unauthorized" });

                return Ok(new { success = true, message = "Task deleted successfully" });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }
    }

    public class CreateTaskRequest
    {
        public string Title { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public DateTime? Deadline { get; set; }
    }

    public class UpdateTaskRequest
    {
        public string? Title { get; set; }
        public string? Status { get; set; }
    }
}