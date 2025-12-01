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
        
        [HttpGet]
        public async Task<IActionResult> GetAllTasks()
        {
            try
            {
                var tasks = await _taskService.GetAllTasks();
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
                    return BadRequest(new { error = "Request body не может быть пустым" });
                
                if (string.IsNullOrWhiteSpace(request.Title))
                    return BadRequest(new { error = "Title обязателен" });
                
                if (string.IsNullOrWhiteSpace(request.Status))
                    return BadRequest(new { error = "Status " });

                var task = await _taskService.AddTask(
                    request.Title,
                    request.Status,
                    request.Deadline
                );

                if (task == null)
                    return BadRequest(new { error = "Something went wrong, check RLS in Supabase!" });

                return Ok(task);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"error AddTask: {ex.Message}");
                return StatusCode(500, new { error = ex.Message });
            }
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateTask(long id, [FromBody] UpdateTaskRequest request)
        {
            try
            {
                var result = await _taskService.UpdateTask(id, request.Status, request.Title);
                
                if (!result)
                    return NotFound(new { error = "Not found" });

                return Ok(new { success = true, message = "Is update" });
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
                var result = await _taskService.DeleteTask(id);
                
                if (!result)
                    return NotFound(new { error = "Not found" });

                return Ok(new { success = true, message = "Is update" });
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