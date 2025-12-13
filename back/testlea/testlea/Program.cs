using Microsoft.AspNetCore.Http.Features;
using Microsoft.Extensions.FileProviders;
using Microsoft.OpenApi.Models;
using testlea.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();

builder.Services.Configure<FormOptions>(options =>
{
    options.MultipartBodyLengthLimit = 10 * 1024 * 1024;
});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "testlea API",
        Version = "v1",
        Description = "Project Management API with AI Assistant & Booking"
    });

    c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Description = "JWT Authorization header using the Bearer scheme. Enter 'Bearer' [space] and then your token in the text input below. Example: 'Bearer 12345abcdef'",
        Name = "Authorization",
        In = ParameterLocation.Header,
        Type = SecuritySchemeType.ApiKey,
        Scheme = "Bearer"
    });

    c.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type = ReferenceType.SecurityScheme,
                    Id = "Bearer"
                }
            },
            new string[] {}
        }
    });
});

builder.Services.AddHttpClient();
builder.Services.AddSingleton<TaskService>();
builder.Services.AddSingleton<KnowledgeBaseService>();
builder.Services.AddScoped<AuthService>();
builder.Services.AddScoped<GroqAIChatService>();
builder.Services.AddScoped<ChatService>();
builder.Services.AddScoped<BookingService>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy => policy
        .WithOrigins("http://localhost:5173", "https://localhost:5173")
        .AllowAnyMethod()
        .AllowAnyHeader()
        .AllowCredentials());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "testlea API v1");
        c.RoutePrefix = "swagger";
    });
}

var uploadPath = Path.Combine(Directory.GetCurrentDirectory(), "uploads");
Directory.CreateDirectory(uploadPath);

app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(uploadPath),
    RequestPath = "/uploads"
});

app.UseCors("AllowFrontend");
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

Console.WriteLine("===========================================");
Console.WriteLine("  testlea API with AI Assistant & Booking");
Console.WriteLine("===========================================");
Console.WriteLine($" Backend: https://localhost:44378");
Console.WriteLine($" Swagger: https://localhost:44378/swagger");
Console.WriteLine($" Frontend: http://localhost:5173");
Console.WriteLine($" Uploads: {uploadPath}");
Console.WriteLine("");
Console.WriteLine(" Auth endpoints:");
Console.WriteLine("  POST /api/auth/register");
Console.WriteLine("  POST /api/auth/login");
Console.WriteLine("  POST /api/auth/forgot-password");
Console.WriteLine("  GET  /api/auth/user");
Console.WriteLine("  POST /api/auth/logout");
Console.WriteLine("  POST /api/auth/refresh");
Console.WriteLine("  POST /api/auth/reset-password");
Console.WriteLine("");
Console.WriteLine(" AI Chat endpoints:");
Console.WriteLine("  POST /api/chat/message");
Console.WriteLine("  POST /api/chat/message-with-files");
Console.WriteLine("  GET  /api/chat/conversations");
Console.WriteLine("  GET  /api/chat/conversations/{id}");
Console.WriteLine("  GET  /api/chat/popular-actions");
Console.WriteLine("  DEL  /api/chat/conversations/{id}");
Console.WriteLine("");
Console.WriteLine(" Booking endpoints:");
Console.WriteLine("  POST /api/booking");
Console.WriteLine("  GET  /api/booking/available-slots");
Console.WriteLine("  GET  /api/booking/check-availability");
Console.WriteLine("===========================================");

app.Run();