const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3001;

// Handlebars einrichten
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Statische Dateien bereitstellen
app.use(express.static(path.join(__dirname, 'public')));

// Routen
app.get('/', (req, res) => {
  res.render('home', { title: 'Startseite' });
});

app.get('/produkte', (req, res) => {
  const produkte = [
    { name: 'Produkt A', preis: 10 },
    { name: 'Produkt B', preis: 20 },
    { name: 'Produkt C', preis: 30 }
  ];
  res.render('produkte', { title: 'Produkte', produkte });
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
