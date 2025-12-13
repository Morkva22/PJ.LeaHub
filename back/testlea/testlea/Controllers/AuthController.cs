using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using testlea.Models.Auth;
using testlea.Services;

namespace testlea.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Produces("application/json")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        private readonly ILogger<AuthController> _logger;

        public AuthController(AuthService authService, ILogger<AuthController> logger)
        {
            _authService = authService;
            _logger = logger;
        }

        [AllowAnonymous]
        [HttpPost("register")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(request.Email))
                    return BadRequest(new { error = "Email is required" });

                if (!IsValidEmail(request.Email))
                    return BadRequest(new { error = "Invalid email format" });

                if (string.IsNullOrWhiteSpace(request.Password))
                    return BadRequest(new { error = "Password is required" });

                if (request.Password.Length < 6)
                    return BadRequest(new { error = "Password must be at least 6 characters" });

                _logger.LogInformation("Processing registration for: {Email}", request.Email);
                var result = await _authService.Register(request);
                
                return Ok(new
                {
                    success = true,
                    message = "Registration successful. Check your email to verify your account.",
                    data = result
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Registration failed for {Email}", request.Email);
                return BadRequest(new { error = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpPost("login")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(request.Email))
                    return BadRequest(new { error = "Email is required" });

                if (string.IsNullOrWhiteSpace(request.Password))
                    return BadRequest(new { error = "Password is required" });

                _logger.LogInformation("Processing login for: {Email}", request.Email);
                var result = await _authService.Login(request);

                return Ok(new
                {
                    success = true,
                    message = "Login successful",
                    data = result
                });
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Login failed for {Email}", request.Email);
                return Unauthorized(new { error = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpPost("forgot-password")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ForgotPassword([FromBody] ForgotPasswordRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(request.Email))
                    return BadRequest(new { error = "Email is required" });

                if (!IsValidEmail(request.Email))
                    return BadRequest(new { error = "Invalid email format" });

                _logger.LogInformation("Password reset requested for: {Email}", request.Email);
                await _authService.ForgotPassword(request);

                return Ok(new
                {
                    success = true,
                    message = "Password reset email sent. Check your inbox."
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Forgot password failed for {Email}", request.Email);
                return BadRequest(new { error = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpPost("reset-password")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> ResetPassword([FromBody] ResetPasswordRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(request.Token))
                    return BadRequest(new { error = "Reset token is required" });

                if (string.IsNullOrWhiteSpace(request.Password))
                    return BadRequest(new { error = "New password is required" });

                if (request.Password.Length < 6)
                    return BadRequest(new { error = "Password must be at least 6 characters" });

                _logger.LogInformation("Processing password reset");
                await _authService.ResetPassword(request);

                return Ok(new
                {
                    success = true,
                    message = "Password reset successfully. You can now login with your new password."
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Password reset failed");
                return BadRequest(new { error = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpPost("refresh")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> RefreshToken([FromBody] RefreshTokenRequest request)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(request.RefreshToken))
                    return BadRequest(new { error = "Refresh token is required" });

                _logger.LogInformation("Processing token refresh");
                var result = await _authService.RefreshToken(request.RefreshToken);

                return Ok(new
                {
                    success = true,
                    message = "Token refreshed successfully",
                    data = result
                });
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Token refresh failed");
                return Unauthorized(new { error = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpGet("user")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> GetUser()
        {
            try
            {
                var authHeader = Request.Headers["Authorization"].ToString();
                if (string.IsNullOrWhiteSpace(authHeader) || !authHeader.StartsWith("Bearer "))
                    return Unauthorized(new { error = "No authorization token provided" });

                var token = authHeader.Replace("Bearer ", "");
                _logger.LogInformation("Fetching user info");
                var user = await _authService.GetUser(token);

                return Ok(new
                {
                    success = true,
                    data = user
                });
            }
            catch (Exception ex)
            {
                _logger.LogWarning(ex, "Get user failed");
                return Unauthorized(new { error = ex.Message });
            }
        }

        [AllowAnonymous]
        [HttpPost("logout")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public async Task<IActionResult> Logout()
        {
            try
            {
                var authHeader = Request.Headers["Authorization"].ToString();
                if (string.IsNullOrWhiteSpace(authHeader) || !authHeader.StartsWith("Bearer "))
                    return Unauthorized(new { error = "No authorization token provided" });

                var token = authHeader.Replace("Bearer ", "");
                _logger.LogInformation("Processing logout");
                await _authService.Logout(token);

                return Ok(new
                {
                    success = true,
                    message = "Logged out successfully"
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Logout failed");
                return BadRequest(new { error = ex.Message });
            }
        }

        private bool IsValidEmail(string email)
        {
            try
            {
                var addr = new System.Net.Mail.MailAddress(email);
                return addr.Address == email;
            }
            catch
            {
                return false;
            }
        }
    }
}