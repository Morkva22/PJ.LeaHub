using System.Text.Json.Serialization;

namespace testlea.Models.Auth
{
    public class ForgotPasswordRequest
    {
        [JsonPropertyName("email")]
        public string Email { get; set; } = string.Empty;
    }
}