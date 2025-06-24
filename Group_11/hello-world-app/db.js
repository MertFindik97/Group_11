// db.js
const mongoose = require('mongoose');

const mongoUri = process.env.MONGO_URI || 'mongodb://mongo:27017/recipes-db';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Verbunden mit MongoDB'))
.catch(err => console.error('❌ MongoDB-Verbindungsfehler:', err));

module.exports = mongoose;
