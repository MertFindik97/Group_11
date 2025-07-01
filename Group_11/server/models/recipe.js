// models/recipe.js
const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  // Optional: numeric ID aus deinem JSON
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    default: []
  },
  // Hier strikt als Array von Strings
  description: {
    type: [String],
    default: []
  },
  image: {
    type: String,
    default: '/images/placeholder.png'
  }
}, {
  timestamps: true
});

module.exports = model('Recipe', recipeSchema);
