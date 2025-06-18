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
