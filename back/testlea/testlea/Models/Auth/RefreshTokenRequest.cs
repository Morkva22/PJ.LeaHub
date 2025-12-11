    using System.Text.Json.Serialization;

    namespace testlea.Models.Auth
    {
        public class RefreshTokenRequest
        {
            [JsonPropertyName("refresh_token")]
            public string RefreshToken { get; set; } = string.Empty;
        }
    }