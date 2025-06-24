// app.js

// 1) .env einlesen (optional, falls du Umgebungsvariablen nutzt)
require('dotenv').config();

// 2) MongoDB-Connection herstellen
require('./db');

const express = require('express');
const path    = require('path');
const { engine } = require('express-handlebars');
const Recipe  = require('./models/recipe');

const app  = express();
const port = process.env.PORT || 3001;

// 3) Statische Dateien ausliefern
app.use(express.static(path.join(__dirname, 'public')));

// 4) Handlebars als View-Engine konfigurieren
app.engine('hbs', engine({
  extname:      'hbs',
  defaultLayout:'main',
  layoutsDir:   path.join(__dirname, 'views', 'layouts')
}));
app.set('view engine', 'hbs');
app.set('views',      path.join(__dirname, 'views'));

// 5) Routes

// Startseite mit "Zufälliges Rezept"-Button
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

// Login-Seite
app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// 5.1) Liste aller Rezepte
app.get('/recipes', async (req, res) => {
  const recipes = await Recipe.find().lean();
  res.render('recipes/list', { recipes, title: 'Rezepte Liste' });
});

// 5.2) "Überrasch mich!" – Zufälliges Rezept
app.get('/recipes/random', async (req, res) => {
  const count  = await Recipe.countDocuments();
  if (count === 0) {
    return res.redirect('/recipes');
  }
  const rand   = Math.floor(Math.random() * count);
  const recipe = await Recipe.findOne().skip(rand).lean();
  res.redirect(`/recipes/${recipe._id}`);
});

// 5.3) Detail-Ansicht eines Rezepts per ID
app.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).lean();
    if (!recipe) {
      return res.status(404).send('Rezept nicht gefunden');
    }
    res.render('recipes/detail', { recipe, title: recipe.title });
  } catch (err) {
    res.status(400).send('Ungültige ID');
  }
});

// 6) Server starten
app.listen(port, () => {
  console.log(`✅ Server läuft auf http://localhost:${port}`);
});
