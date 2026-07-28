# LeaHub - Educational & Learning Platform (Full-Stack)

LeaHub is a modern full-stack web application designed for educational and schedule management workflows. The project integrates an interactive React frontend with a scalable .NET 8 Web API backend, featuring AI chatbot assistance, user authentication, interactive scheduling, and Docker containerization.

---

## Architecture Overview

The repository is structured as a full-stack monorepo separating presentation and server infrastructure:

```
PJ.LeaHub/
├── front/                  # Client Application (React + Vite)
│   ├── public/             # Static brand assets and icons
│   ├── src/                # React components, pages (Schedule, Auth, AI Chat), and assets
│   ├── vercel.json         # Vercel deployment configuration
│   └── package.json        # Frontend dependencies and Vite build scripts
│
└── back/testlea/           # Server Application (.NET 8 Web API)
    └── testlea/
        ├── Controllers/    # REST API Endpoint routing handlers
        ├── DTOs/           # Data Transfer Objects for request validation
        ├── Models/         # Core business domain entities
        ├── Services/       # Business logic layer (AI integrations, Auth, Data processing)
        ├── Dockerfile      # Container execution blueprint for API
```

---

## Tech Stack & Tools

### Frontend Stack
- **Framework & Tooling:** React.js, Vite, Fast Refresh
- **Deployment:** Vercel Hosting Platform
- **UI & State:** Component-driven design, responsive CSS modules

### Backend Stack
- **Framework & Runtime:** C# / .NET 8.0 Web API
- **Architecture Layering:** Controller-Service Pattern with DTO abstractions
- **DevOps & Containers:** Docker, Docker Compose

---

## Key Features & Capabilities

- **Interactive Schedule System:** Timetable management for educational workflows.
- **AI Chat Assistant:** Integrated intelligent chat functionality assisting users with tasks.
- **Authentication & Authorization:** Secure user registration and session management workflows.
- **Containerized Backend:** Production-ready container setups enabling easy database and API deployment via Docker Compose.

---

## Getting Started & Local Setup

### Prerequisites

- Node.js (v18.x or higher)
- .NET 8.0 SDK
- Docker Desktop (Optional, for running backend services via containers)

---

### Running the Frontend (`/front`)

1. Navigate to the frontend directory:
   ```bash
   cd front
   ```
2. Install npm packages:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

---

### Running the Backend (`/back/testlea/testlea`)

#### Option A: Running with .NET CLI
1. Navigate to the project folder:
   ```bash
   cd back/testlea/testlea
   ```
2. Restore packages and run:
   ```bash
   dotnet restore
   dotnet run
   ```

#### Option B: Running with Docker Compose
1. Navigate to the backend directory and launch containers:
   ```bash
   cd back/testlea/testlea
   docker-compose up --build
   ```
