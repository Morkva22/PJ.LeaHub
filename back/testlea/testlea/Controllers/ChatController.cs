using Microsoft.AspNetCore.Mvc;
using testlea.DTOs.Chat;
using testlea.Services;

namespace testlea.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChatController : ControllerBase
{
    private readonly ChatService _chatService;
    private readonly ILogger<ChatController> _logger;

    public ChatController(ChatService chatService, ILogger<ChatController> logger)
    {
        _chatService = chatService;
        _logger = logger;
    }

    [HttpPost("message")]
    public async Task<IActionResult> SendMessage([FromBody] SendMessageRequest request)
    {
        try
        {
            var userId = "test-user";

            if (string.IsNullOrWhiteSpace(request.Content))
                return BadRequest(new { error = "Message content cannot be empty" });

            var response = await _chatService.SendMessageAsync(userId, request);
            return Ok(response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing message");
            return StatusCode(500, new { error = "Failed to process message" });
        }
    }

    [HttpPost("message-with-files")]
    public async Task<IActionResult> SendMessageWithFiles([FromForm] string content, [FromForm] string? conversationId, [FromForm] List<IFormFile>? files)
    {
        try
        {
            var userId = "test-user";

            if (string.IsNullOrWhiteSpace(content) && (files == null || !files.Any()))
                return BadRequest(new { error = "Message must have content or files" });

            var response = await _chatService.SendMessageWithFilesAsync(userId, content, conversationId, files);
            return Ok(response);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error processing message with files");
            return StatusCode(500, new { error = "Failed to process message" });
        }
    }

    [HttpGet("conversations")]
    public async Task<IActionResult> GetConversations()
    {
        try
        {
            var userId = "test-user";
            var conversations = await _chatService.GetUserConversationsAsync(userId);
            return Ok(conversations);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting conversations");
            return StatusCode(500, new { error = "Failed to load conversations" });
        }
    }

    [HttpGet("conversations/{id}")]
    public async Task<IActionResult> GetConversationDetails(string id)
    {
        try
        {
            var userId = "test-user";
            var conversation = await _chatService.GetConversationDetailsAsync(id, userId);
            return Ok(conversation);
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error getting conversation details");
            return StatusCode(500, new { error = "Failed to load conversation" });
        }
    }

    [HttpDelete("conversations/{id}")]
    public async Task<IActionResult> DeleteConversation(string id)
    {
        try
        {
            var userId = "test-user";
            await _chatService.DeleteConversationAsync(id, userId);
            return Ok(new { message = "Conversation deleted successfully" });
        }
        catch (Exception ex)
        {
            _logger.LogError(ex, "Error deleting conversation");
            return StatusCode(500, new { error = "Failed to delete conversation" });
        }
    }

    [HttpGet("popular-actions")]
    public IActionResult GetPopularActions()
    {
        var actions = new List<PopularActionResponse>
        {
            new PopularActionResponse
            {
                Id = "1",
                Title = "Summarize my recent tasks",
                Icon = "file-text",
                Prompt = "Can you summarize my recent tasks and their status?"
            },
            new PopularActionResponse
            {
                Id = "2",
                Title = "Show upcoming deadlines",
                Icon = "calendar",
                Prompt = "What are my upcoming project deadlines?"
            },
            new PopularActionResponse
            {
                Id = "3",
                Title = "Project progress report",
                Icon = "trending-up",
                Prompt = "Give me a detailed report on current project progress"
            },
            new PopularActionResponse
            {
                Id = "4",
                Title = "Team performance overview",
                Icon = "users",
                Prompt = "Give me an overview of team performance this week"
            },
            new PopularActionResponse
            {
                Id = "5",
                Title = "Create project checklist",
                Icon = "check-circle",
                Prompt = "Help me create a comprehensive project management checklist"
            }
        };

        return Ok(actions);
    }
}