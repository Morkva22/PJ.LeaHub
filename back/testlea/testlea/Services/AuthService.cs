using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using testlea.Models.Auth;

namespace testlea.Services
{
    public class AuthService
    {
        private readonly HttpClient _httpClient;
        private readonly string _authUrl;
        private readonly string _apiKey;
        private readonly ILogger<AuthService> _logger;

        public AuthService(IConfiguration configuration, ILogger<AuthService> logger)
        {
            var supabaseUrl = configuration["Supabase:Url"]!.Replace("/rest/v1", "");
            _authUrl = $"{supabaseUrl}/auth/v1";
            _apiKey = configuration["Supabase:AnonKey"]!;
            _logger = logger;

            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Add("apikey", _apiKey);
            
            _logger.LogInformation("AuthService initialized with URL: {AuthUrl}", _authUrl);
            _logger.LogInformation("API Key (first 20 chars): {ApiKey}", _apiKey.Substring(0, Math.Min(20, _apiKey.Length)));
        }

        public async Task<AuthResponse?> Register(RegisterRequest request)
        {
            try
            {
                _logger.LogInformation("=== REGISTRATION START ===");
                _logger.LogInformation("Attempting to register user: {Email}", request.Email);

                var payload = new
                {
                    email = request.Email,
                    password = request.Password,
                    data = new
                    {
                        full_name = request.FullName ?? ""
                    }
                };

                var json = JsonSerializer.Serialize(payload);
                _logger.LogInformation("Request payload: {Json}", json);
                
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var url = $"{_authUrl}/signup";
                _logger.LogInformation("Sending POST request to: {Url}", url);
                
                var response = await _httpClient.PostAsync(url, content);
                var responseBody = await response.Content.ReadAsStringAsync();

                _logger.LogInformation("=== SUPABASE RESPONSE ===");
                _logger.LogInformation("HTTP Status Code: {StatusCode} ({StatusCodeNumber})", response.StatusCode, (int)response.StatusCode);
                _logger.LogInformation("Response Body: {Body}", responseBody);
                _logger.LogInformation("========================");

                if (!response.IsSuccessStatusCode)
                {
                    _logger.LogError("Registration FAILED - Supabase returned error");
                    
                    try
                    {
                        var error = JsonSerializer.Deserialize<SupabaseErrorResponse>(responseBody, new JsonSerializerOptions
                        {
                            PropertyNameCaseInsensitive = true
                        });
                        
                        _logger.LogError("Parsed Error - Error: {Error}", error?.Error);
                        _logger.LogError("Parsed Error - Message: {Message}", error?.Message);
                        _logger.LogError("Parsed Error - ErrorDescription: {ErrorDescription}", error?.ErrorDescription);
                        
                        var errorMessage = error?.ErrorDescription ?? error?.Message ?? error?.Error ?? responseBody;
                        throw new Exception(errorMessage);
                    }
                    catch (JsonException jsonEx)
                    {
                        _logger.LogError(jsonEx, "Failed to parse error response");
                        throw new Exception($"Registration failed: {responseBody}");
                    }
                }

                var result = JsonSerializer.Deserialize<AuthResponse>(responseBody, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                _logger.LogInformation("User registered successfully: {Email}", request.Email);
                _logger.LogInformation("=== REGISTRATION END ===");
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Registration error for {Email}. Exception: {Message}", request.Email, ex.Message);
                throw;
            }
        }

        public async Task<AuthResponse?> Login(LoginRequest request)
        {
            try
            {
                _logger.LogInformation("Attempting login for user: {Email}", request.Email);

                var payload = new
                {
                    email = request.Email,
                    password = request.Password
                };

                var json = JsonSerializer.Serialize(payload);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await _httpClient.PostAsync($"{_authUrl}/token?grant_type=password", content);
                var responseBody = await response.Content.ReadAsStringAsync();

                _logger.LogInformation("Login Response Status: {StatusCode}", response.StatusCode);
                _logger.LogInformation("Login Response Body: {Body}", responseBody);

                if (!response.IsSuccessStatusCode)
                {
                    var error = JsonSerializer.Deserialize<SupabaseErrorResponse>(responseBody, new JsonSerializerOptions
                    {
                        PropertyNameCaseInsensitive = true
                    });
                    var errorMessage = error?.ErrorDescription ?? error?.Message ?? error?.Error ?? "Login failed";
                    
                    _logger.LogWarning("Login failed for {Email}: {Error}", request.Email, errorMessage);
                    throw new Exception(errorMessage);
                }

                var result = JsonSerializer.Deserialize<AuthResponse>(responseBody, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                _logger.LogInformation("User logged in successfully: {Email}", request.Email);
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Login error for {Email}", request.Email);
                throw;
            }
        }

        public async Task<bool> ForgotPassword(ForgotPasswordRequest request)
        {
            try
            {
                _logger.LogInformation("Password reset requested for: {Email}", request.Email);

                var payload = new
                {
                    email = request.Email
                };

                var json = JsonSerializer.Serialize(payload);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await _httpClient.PostAsync($"{_authUrl}/recover", content);
                
                if (!response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var error = JsonSerializer.Deserialize<SupabaseErrorResponse>(responseBody);
                    var errorMessage = error?.ErrorDescription ?? error?.Message ?? error?.Error ?? "Password reset failed";
                    
                    _logger.LogError("Password reset failed for {Email}: {Error}", request.Email, errorMessage);
                    throw new Exception(errorMessage);
                }

                _logger.LogInformation("Password reset email sent to: {Email}", request.Email);
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Forgot password error for {Email}", request.Email);
                throw;
            }
        }

        public async Task<AuthResponse?> RefreshToken(string refreshToken)
        {
            try
            {
                _logger.LogInformation("Attempting to refresh token");

                var payload = new
                {
                    refresh_token = refreshToken
                };

                var json = JsonSerializer.Serialize(payload);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await _httpClient.PostAsync($"{_authUrl}/token?grant_type=refresh_token", content);
                var responseBody = await response.Content.ReadAsStringAsync();

                if (!response.IsSuccessStatusCode)
                {
                    var error = JsonSerializer.Deserialize<SupabaseErrorResponse>(responseBody);
                    var errorMessage = error?.ErrorDescription ?? error?.Message ?? error?.Error ?? "Token refresh failed";
                    
                    _logger.LogWarning("Token refresh failed: {Error}", errorMessage);
                    throw new Exception(errorMessage);
                }

                var result = JsonSerializer.Deserialize<AuthResponse>(responseBody, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                _logger.LogInformation("Token refreshed successfully");
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Token refresh error");
                throw;
            }
        }

        public async Task<SupabaseUser?> GetUser(string accessToken)
        {
            try
            {
                _logger.LogInformation("Fetching user info");

                var request = new HttpRequestMessage(HttpMethod.Get, $"{_authUrl}/user");
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

                var response = await _httpClient.SendAsync(request);
                var responseBody = await response.Content.ReadAsStringAsync();

                if (!response.IsSuccessStatusCode)
                {
                    var error = JsonSerializer.Deserialize<SupabaseErrorResponse>(responseBody);
                    var errorMessage = error?.ErrorDescription ?? error?.Message ?? error?.Error ?? "Get user failed";
                    
                    _logger.LogWarning("Get user failed: {Error}", errorMessage);
                    throw new Exception(errorMessage);
                }

                var result = JsonSerializer.Deserialize<SupabaseUser>(responseBody, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                _logger.LogInformation("User info fetched successfully");
                return result;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Get user error");
                throw;
            }
        }

        public async Task<bool> Logout(string accessToken)
        {
            try
            {
                _logger.LogInformation("Attempting logout");

                var request = new HttpRequestMessage(HttpMethod.Post, $"{_authUrl}/logout");
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);

                var response = await _httpClient.SendAsync(request);
                
                if (response.IsSuccessStatusCode)
                {
                    _logger.LogInformation("User logged out successfully");
                }
                else
                {
                    _logger.LogWarning("Logout failed with status: {StatusCode}", response.StatusCode);
                }
                
                return response.IsSuccessStatusCode;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Logout error");
                throw;
            }
        }

        public async Task<bool> ResetPassword(ResetPasswordRequest request)
        {
            try
            {
                _logger.LogInformation("Attempting password reset with token");

                var payload = new
                {
                    type = "recovery",
                    token = request.Token,
                    password = request.Password
                };

                
                var json = JsonSerializer.Serialize(payload);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await _httpClient.PostAsync($"{_authUrl}/user", content);
                
                if (!response.IsSuccessStatusCode)
                {
                    var responseBody = await response.Content.ReadAsStringAsync();
                    var error = JsonSerializer.Deserialize<SupabaseErrorResponse>(responseBody);
                    var errorMessage = error?.ErrorDescription ?? error?.Message ?? error?.Error ?? "Password reset failed";
                    
                    _logger.LogError("Password reset failed: {Error}", errorMessage);
                    throw new Exception(errorMessage);
                }

                _logger.LogInformation("Password reset successfully");
                return true;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Reset password error");
                throw;
            }
        }
    }
}
