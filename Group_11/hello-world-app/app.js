const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const recipes = require('./data/recipes.json');

const app = express();
const port = 3001;

// Statische Dateien
app.use(express.static(path.join(__dirname, 'public')));

// Handlebars konfigurieren
app.engine('hbs', engine({ extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname,'views','layouts') }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'views'));

// Routen
app.get('/', (req, res) => {
  const random = recipes[Math.floor(Math.random()*recipes.length)];
  res.render('recipes/detail', { recipe: random, title: random.title });
});

// Random-Rezept-Route
app.get('/random', (req, res) => {
  const random = recipes[Math.floor(Math.random() * recipes.length)];
  res.render('recipes/detail', { recipe: random, title: random.title });
});


app.get('/recipes', (req, res) => {
  res.render('recipes/list', { recipes, title: 'Rezepte Liste' });
});

app.get('/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id == req.params.id);
  if(recipe) {
    res.render('recipes/detail', { recipe, title: recipe.title });
  } else {
    res.status(404).send('Rezept nicht gefunden');
  }
});

app.listen(3000, () => console.log('Server läuft auf http://localhost:3000'));