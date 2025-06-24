// app.js

// 1) Umgebungsvariablen (z.B. MONGO_URI) laden
require('dotenv').config();

// 2) MongoDB-Verbindung aufbauen
require('./db');

// 3) Express & Co. importieren
const express = require('express');
const path    = require('path');
const { engine } = require('express-handlebars');

// 4) Dein Mongoose-Model importieren
const Recipe = require('./models/recipe');

// 5) App initialisieren
const app = express();
const port = process.env.PORT || 3001; // nutzt PORT aus .env oder 3001

// 6) Statische Dateien
app.use(express.static(path.join(__dirname, 'public')));

// 7) Handlebars konfigurieren
app.engine('hbs', engine({
  extname: 'hbs',
  defaultLayout: 'main',
  layoutsDir:  path.join(__dirname, 'views', 'layouts')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// 8) Routen

// Liste aller Rezepte aus der Datenbank
app.get('/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find().lean();
    res.render('recipes/list', { recipes, title: 'Rezepte Liste' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Serverfehler');
  }
});

// Detailansicht eines Rezepts
app.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).lean();
    if (!recipe) {
      return res.status(404).send('Rezept nicht gefunden');
    }
    res.render('recipes/detail', { recipe, title: recipe.title });
  } catch (err) {
    console.error(err);
    res.status(400).send('Ungültige ID');
  }
});

// 9) Server starten
app.listen(port, () => {
  console.log(`✅ Server läuft auf http://localhost:${port}`);
});
app.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

app.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

// 1) Zufalls-Rezept
app.get('/recipes/random', async (req, res) => {
  const count = await Recipe.countDocuments();
  if (count === 0) {
    return res.redirect('/recipes');
  }
  const rand = Math.floor(Math.random() * count);
  const recipe = await Recipe.findOne().skip(rand).lean();
  res.redirect(`/recipes/${recipe._id}`);
});

// 2) Detail-Ansicht per ID
app.get('/recipes/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).lean();
    if (!recipe) return res.status(404).send('Rezept nicht gefunden');
    res.render('recipes/detail', { recipe, title: recipe.title });
  } catch {
    res.status(400).send('Ungültige ID');
  }
});
