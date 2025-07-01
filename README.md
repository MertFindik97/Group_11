# JackPot Recipe App

A fullstack recipe application for discovering, randomizing, and managing recipes. Built with **Next.js** (frontend) and **Express/MongoDB** (backend). Includes Docker support for easy deployment.

---

## Features

- Browse, view, and randomize recipes
- REST API for recipe CRUD operations
- Next.js frontend with SSR and static pages
- Express backend with MongoDB for persistent storage
- Dockerized for local or production deployment

---

## Project Structure

```
Group_11/
├── Group_11/
│   ├── jackpot-app/      # Next.js frontend
│   └── server/           # Express/MongoDB backend
└── README.md             # (This file)
```

### jackpot-app (Frontend)

- `pages/` - Next.js pages (routes)
- `data/` - Static recipe data (for demo/dev)
- `public/` - Images, CSS, static assets
- `styles/` - Global and Tailwind CSS
- `Dockerfile` - Docker config for frontend

### server (Backend)

- `app.js` - Express app entry point
- `models/` - Mongoose models (e.g., Recipe)
- `routes/` - API endpoints (REST)
- `data/` - Seed data for MongoDB
- `views/` - Handlebars templates (optional SSR)
- `public/` - Static assets for backend
- `Dockerfile` - Docker config for backend
- `docker-compose.yml` - Multi-service orchestration

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB (local or Docker)

### 1. Local Development

#### Backend (server)

```bash
cd Group_11/Group_11/server
npm install
npm start
# Runs on http://localhost:3001
```

#### Frontend (jackpot-app)

```bash
cd Group_11/Group_11/jackpot-app
npm install
npm run dev
# Runs on http://localhost:3000
```

#### Seed the Database

```bash
cd Group_11/Group_11/server
node seed.js
```

### 2. Dockerized Setup

From the `Group_11/Group_11/server` directory:

```bash
docker-compose up --build
```

- Frontend: http://localhost:3000 (if mapped)
- Backend API: http://localhost:3001
- MongoDB: localhost:27017

---

## API Overview

### Backend (Express)

- `GET    /api/recipes` - List all recipes
- `GET    /api/recipes/:id` - Get recipe by ID
- `GET    /api/recipes/random` - Get a random recipe
- `POST   /api/recipes` - Create a new recipe
- `PUT    /api/recipes/:id` - Update a recipe
- `DELETE /api/recipes/:id` - Delete a recipe

### Frontend (Next.js)

- `/` - Home page
- `/recipes` - List all recipes
- `/recipes/[id]` - Recipe details
- `/random` - Random recipe generator
- `/login` - Login page (UI only)

---

## Data Model

### Example Recipe (JSON)

```json
{
  "id": 1,
  "title": "Spaghetti Carbonara",
  "image": "/images/carbonara.jpg",
  "ingredients": [
    "200g Spaghetti",
    "100g Pancetta",
    "2 Eier",
    "50g Parmesan",
    "Pfeffer"
  ],
  "steps": [
    "Spaghetti kochen",
    "Pancetta anbraten",
    "Eier mit Parmesan mischen",
    "Alles vermengen"
  ]
}
```

### Mongoose Model (server/models/recipe.js)

- `id`: Number (required)
- `title`: String (required)
- `ingredients`: [String]
- `description`: [String] (steps)
- `image`: String

---

## Styling & Configuration

- Uses Tailwind CSS (frontend)
- Global styles in `styles/globals.css` and `public/css/style.css`
- ESLint and PostCSS configured for best practices
- Handlebars templates for server-side rendering (optional)

---

## Contributing

- Fork and clone the repo
- Use feature branches and submit PRs
- Follow code style and linting rules
- Keep documentation up to date

---

## Troubleshooting

- Ensure MongoDB is running (locally or via Docker)
- Check `.env` for custom environment variables (e.g., `MONGO_URI`)
- For Docker, rebuild containers if dependencies change

---

## License

MIT (or specify your license)
