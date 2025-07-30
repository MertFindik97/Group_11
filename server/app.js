// app.js

/**
 * REST API for Recipes
 *
 * Endpoints:
 *   GET    /api/recipes         - List all recipes
 *   GET    /api/recipes/:id     - Get a recipe by ID
 *   GET    /api/recipes/random  - Get a random recipe
 *   POST   /api/recipes         - Create a new recipe
 *   PUT    /api/recipes/:id     - Update a recipe by ID
 *   DELETE /api/recipes/:id     - Delete a recipe by ID
 *
 * All responses are in JSON format.
 */

// 1) .env einlesen (optional, falls du Umgebungsvariablen nutzt)
require('dotenv').config();

// 2) MongoDB-Connection herstellen
require('./db');

const express = require('express');
const path    = require('path');

const app  = express();
const port = process.env.PORT || 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files (e.g., images)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Mount main API routes
app.use('/api', require('./routes'));

// 404 handler for unknown API routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

// 6) Server starten
app.listen(port, () => {
  console.log(`✅ REST API läuft auf http://localhost:${port}`);
});
