// seed.js
const mongoose = require('mongoose');
const Recipe  = require('./models/recipe');
const data    = require('./data/recipes.json');

const mongoUri = process.env.MONGO_URI || 'mongodb://mongo:27017/recipes-db';

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    await Recipe.deleteMany({});
    await Recipe.insertMany(data);
    console.log(`✅ ${data.length} Rezepte eingefügt.`);
  })
  .catch(console.error)
  .finally(() => mongoose.connection.close());
