// routes/recipe.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/recipe');

/**
 * @route   GET /api/recipes
 * @desc    Get all recipes
 * @access  Public
 */
router.get('/', async (req, res) => {
  try {
    const recipes = await Recipe.find().lean();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch recipes' });
  }
});

/**
 * @route   GET /api/recipes/random
 * @desc    Get a random recipe
 * @access  Public
 */
router.get('/random', async (req, res) => {
  try {
    const count = await Recipe.countDocuments();
    if (count === 0) return res.status(404).json({ error: 'No recipes found' });
    const rand = Math.floor(Math.random() * count);
    const recipe = await Recipe.findOne().skip(rand).lean();
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch random recipe' });
  }
});

/**
 * @route   GET /api/recipes/:id
 * @desc    Get a recipe by ID
 * @access  Public
 */
router.get('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id).lean();
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(400).json({ error: 'Invalid ID' });
  }
});

/**
 * @route   POST /api/recipes
 * @desc    Create a new recipe
 * @access  Public
 */
router.post('/', async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create recipe', details: err.message });
  }
});

/**
 * @route   PUT /api/recipes/:id
 * @desc    Update a recipe by ID
 * @access  Public
 */
router.put('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).lean();
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json(recipe);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update recipe', details: err.message });
  }
});

/**
 * @route   DELETE /api/recipes/:id
 * @desc    Delete a recipe by ID
 * @access  Public
 */
router.delete('/:id', async (req, res) => {
  try {
    const recipe = await Recipe.findByIdAndDelete(req.params.id).lean();
    if (!recipe) return res.status(404).json({ error: 'Recipe not found' });
    res.json({ message: 'Recipe deleted' });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete recipe', details: err.message });
  }
});

module.exports = router;
