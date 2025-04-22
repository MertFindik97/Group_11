const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('<h1>Willkommen!</h1><p><a href="/hello">Gehe zu /hello</a></p>');
});

app.get('/hello', (req, res) => {
  res.send('Hallo Welt!');
});

app.listen(port, () => {
  console.log(`App läuft unter http://localhost:${port}`);
});
