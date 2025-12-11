using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using testlea.Models;

namespace testlea.Services
{
    public class TaskService
    {
        private readonly HttpClient _httpClient;
        private readonly string _baseUrl;
        private const string TableName = "tasks";

        public TaskService(IConfiguration configuration)
        {
            _baseUrl = configuration["Supabase:Url"]!.TrimEnd('/');
            var anonKey = configuration["Supabase:AnonKey"]!;

            _httpClient = new HttpClient();
            _httpClient.DefaultRequestHeaders.Add("apikey", anonKey);
            _httpClient.DefaultRequestHeaders.Add("Prefer", "return=representation");
        }

        private string FullUrl(string path = "") => $"{_baseUrl}/{TableName}{path}";

        public async Task<List<TaskModel>> GetAllTasks(string? accessToken = null)
        {
            try
            {
                var request = new HttpRequestMessage(HttpMethod.Get, FullUrl("?select=*"));
                
                if (!string.IsNullOrWhiteSpace(accessToken))
                {
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                }

                var response = await _httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();

                var json = await response.Content.ReadAsStringAsync();
                var tasks = JsonSerializer.Deserialize<List<TaskModel>>(json, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                return tasks ?? new List<TaskModel>();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error GetAllTasks: {ex.Message}");
                return new List<TaskModel>();
            }
        }

        public async Task<TaskModel?> AddTask(string title, string status, string? accessToken = null, DateTime? deadline = null)
        {
            try
            {
                var newTask = new { title, status, deadline };
                var json = JsonSerializer.Serialize(newTask);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var request = new HttpRequestMessage(HttpMethod.Post, FullUrl())
                {
                    Content = content
                };

                if (!string.IsNullOrWhiteSpace(accessToken))
                {
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                }

                var response = await _httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();

                var resultJson = await response.Content.ReadAsStringAsync();
                var result = JsonSerializer.Deserialize<List<TaskModel>>(resultJson, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                return result?.FirstOrDefault();
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error AddTask: {ex.Message}");
                return null;
            }
        }

        public async Task<bool> UpdateTask(long id, string? accessToken = null, string? newStatus = null, string? newTitle = null)
        {
            try
            {
                var updates = new Dictionary<string, object?>();
                if (newStatus != null) updates["status"] = newStatus;
                if (newTitle != null) updates["title"] = newTitle;

                if (updates.Count == 0) return false;

                var json = JsonSerializer.Serialize(updates);
                var content = new StringContent(json, Encoding.UTF8, "application/json");

                var request = new HttpRequestMessage(HttpMethod.Patch, FullUrl($"?id=eq.{id}"))
                {
                    Content = content
                };

                if (!string.IsNullOrWhiteSpace(accessToken))
                {
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                }

                var response = await _httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error UpdateTask: {ex.Message}");
                return false;
            }
        }

        public async Task<bool> DeleteTask(long id, string? accessToken = null)
        {
            try
            {
                var request = new HttpRequestMessage(HttpMethod.Delete, FullUrl($"?id=eq.{id}"));

                if (!string.IsNullOrWhiteSpace(accessToken))
                {
                    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", accessToken);
                }

                var response = await _httpClient.SendAsync(request);
                response.EnsureSuccessStatusCode();

                return true;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error DeleteTask: {ex.Message}");
                return false;
            }
        }
    }
}