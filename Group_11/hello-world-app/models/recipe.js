// models/recipe.js
const { Schema, model } = require('mongoose');

const recipeSchema = new Schema({
  title:       { type: String, required: true },
  ingredients: { type: [String], default: [] },
  instructions:{ type: String }
}, { timestamps: true });

module.exports = model('Recipe', recipeSchema);
