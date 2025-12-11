using System.Text.Json.Serialization;

namespace testlea.Models.Auth
{
    public class SupabaseUser
    {
        [JsonPropertyName("id")]
        public string? Id { get; set; }

        [JsonPropertyName("email")]
        public string? Email { get; set; }

        [JsonPropertyName("user_metadata")]
        public UserMetadata? UserMetadata { get; set; }

        [JsonPropertyName("created_at")]
        public DateTime? CreatedAt { get; set; }
    }
}