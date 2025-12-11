using System.Text.Json.Serialization;

namespace testlea.Models.Auth
{
    public class UserMetadata
    {
        [JsonPropertyName("full_name")]
        public string? FullName { get; set; }
    }
}