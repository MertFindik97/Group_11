// models/recipe.js
const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  title:        { type: String, required: true },
  ingredients:  { type: [String], default: [] },
  instructions: { type: String },          // ← Komma nicht vergessen
  description:  { type: String, default: '' },
  image:        { type: String,
                  default: '/images/carbonara.png' }
}, { timestamps: true });

module.exports = model('Recipe', recipeSchema);
