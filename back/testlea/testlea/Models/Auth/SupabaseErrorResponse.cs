using System.Text.Json.Serialization;

namespace testlea.Models.Auth
{
    public class SupabaseErrorResponse
    {
        [JsonPropertyName("error")]
        public string? Error { get; set; }

        [JsonPropertyName("error_description")]
        public string? ErrorDescription { get; set; }

        [JsonPropertyName("message")]
        public string? Message { get; set; }
    }
}