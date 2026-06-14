````md
# RepoLens 🔍

> AI-powered GitHub repository analysis and onboarding assistant.

RepoLens helps developers understand unfamiliar codebases faster by automatically generating repository summaries, file explanations, architecture insights, and AI-powered Q&A over source code.

---

## 🚀 Problem

When developers join a new project, they often spend days understanding:

- Project architecture
- Folder structure
- API flows
- Service dependencies
- Business logic

RepoLens accelerates onboarding by using AI to analyze repositories and provide instant explanations and insights.

---

## ✨ Features

### 📂 Repository Import

- Import public GitHub repositories
- Fetch repository structure using GitHub API
- Browse files and folders

### 🤖 AI-Powered Code Understanding

- Generate repository overview
- Explain individual files
- Summarize modules and services
- Identify key components and responsibilities

### 💬 Repository Chat

Ask natural language questions such as:

- How does authentication work?
- Where is user management implemented?
- Which API creates orders?
- What is the application architecture?

### 🔎 Semantic Code Search

- Convert source code into embeddings
- Store vectors in PostgreSQL using pgvector
- Retrieve relevant code context for AI responses

### 📖 Developer Onboarding

Automatically generate:

- Architecture summaries
- Codebase documentation
- Developer onboarding guides

---

## 🏗️ Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui

### Backend

- Node.js
- Express
- TypeScript
- Zod
- Octokit (GitHub API)

### Database

- Supabase PostgreSQL
- pgvector

### AI

- OpenAI
- Gemini
- OpenRouter

### Authentication

- Clerk / Supabase Auth

### Deployment

- Vercel (Frontend)
- Render / Railway (Backend)
- Supabase (Database)

---

## 🏛️ Architecture

```text
User
 │
 ▼
Frontend (React + Vite)
 │
 ▼
Backend API (Express)
 │
 ├── GitHub Repository Analysis
 ├── File Processing
 ├── AI Summarization
 └── Semantic Search
 │
 ▼
Supabase PostgreSQL + pgvector
 │
 ▼
OpenAI / Gemini
 │
 ▼
Repository Insights & Q&A
````

---

## 📋 MVP Roadmap

### Phase 1

* [ ] Authentication
* [ ] GitHub repository import
* [ ] Repository file explorer
* [ ] Basic repository overview

### Phase 2

* [ ] AI file summaries
* [ ] Repository-wide search
* [ ] Semantic embeddings
* [ ] AI chat over codebase

### Phase 3

* [ ] Architecture diagrams
* [ ] Dependency graphs
* [ ] API discovery
* [ ] Onboarding guide generation

### Phase 4

* [ ] Pull request summarization
* [ ] Impact analysis
* [ ] Multi-repository support
* [ ] Team collaboration

---

## ⚙️ Getting Started

### Clone the Repository

```bash
git clone https://github.com/Ravik27280/RepoLens.git

cd RepoLens
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

### Backend Setup

```bash
cd backend

npm install

npm run dev
```

### Environment Variables

Create a `.env` file:

```env
SUPABASE_URL=
SUPABASE_ANON_KEY=

GITHUB_TOKEN=

OPENAI_API_KEY=
GEMINI_API_KEY=
OPENROUTER_API_KEY=
```

---

## 🎯 Use Cases

### New Developer Onboarding

Understand large repositories faster.

### Engineering Teams

Generate documentation automatically.

### Open Source Contributors

Explore unfamiliar projects before contributing.

### Technical Interviews

Quickly understand take-home projects and sample repositories.

---

## 📸 Screenshots

Coming soon...

* Dashboard
* Repository Explorer
* AI Chat
* Architecture View

---

## 🤝 Contributing

Contributions, ideas, and feedback are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Ravik Kushwaha**

Building AI-powered developer tools to improve software engineering productivity.

If you found this project useful, consider giving it a ⭐ on GitHub.

```
```
