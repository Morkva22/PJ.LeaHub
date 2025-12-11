using System.Text.Json.Serialization;

namespace testlea.Models.Auth
{
    public class ResetPasswordRequest
    {
        [JsonPropertyName("token")]
        public string Token { get; set; } = string.Empty;

        [JsonPropertyName("password")]
        public string Password { get; set; } = string.Empty;
    }
}