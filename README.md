# 🐞 Issue Tracker API

A Dockerized Node.js + Express + Prisma + PostgreSQL backend for managing issues and projects.

## 📦 Features

- 🛠️ REST API for creating, updating, deleting projects and issues
- 🔐 Environment-based configuration
- 🐳 Dockerized setup with PostgreSQL
- 🧪 Prisma ORM and migrations
- 📁 Scalable folder structure

---

## 🚀 Quick Start

### 🐳 Docker Setup

```bash
git clone https://github.com/your-username/issue-tracker.git
cd issue-tracker
cp .env.example .env      # Update credentials if needed
docker-compose up --build

 Prisma Commands
Generate Prisma Client:

bash
Copy
Edit
npx prisma generate
Run Migrations:

bash
Copy
Edit
npx prisma migrate dev --name init
📚 API Documentation
🔁 Project Endpoints
➕ Create Project
POST /api/projects

json
Copy
Edit
{
  "name": "Project A",
  "description": "Test project"
}
📄 Get All Projects
GET /api/projects

🗑️ Delete Project
DELETE /api/projects/:id

🐛 Issue Endpoints
➕ Create Issue
POST /api/issues

json
Copy
Edit
{
  "title": "Bug #1",
  "description": "Fix this bug",
  "projectId": "clx123abc456"
}
📄 Get All Issues
GET /api/issues

✏️ Update Issue
PUT /api/issues/:id

json
Copy
Edit
{
  "status": "resolved"
}
🗑️ Delete Issue
DELETE /api/issues/:id

🧼 Clean Up
To stop and remove containers:

bash
Copy
Edit
docker-compose down
👥 Contributors
shariq nabi
