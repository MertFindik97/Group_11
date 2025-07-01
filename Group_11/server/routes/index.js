const express = require('express');
const router = express.Router();

// Mount the recipe routes under /recipes
router.use('/recipes', require('./recipe'));

// Future routes can be added here, e.g.:
// router.use('/users', require('./user'));

module.exports = router;
