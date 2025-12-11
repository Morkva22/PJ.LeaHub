using System.Text.Json.Serialization;

namespace testlea.Models.Auth
{
    public class RegisterRequest
    {
        [JsonPropertyName("email")]
        public string Email { get; set; } = string.Empty;

        [JsonPropertyName("password")]
        public string Password { get; set; } = string.Empty;

        [JsonPropertyName("full_name")]  
        public string? FullName { get; set; }
    }
}