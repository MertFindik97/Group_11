const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Recipe = require('../models/recipe');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);

  // Seed a recipe
  await Recipe.create({ title: "CI Test Recipe", ingredients: ["test"], instructions: "mix" });
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('System Test: Recipe Model with real DB', () => {
  it('should find a recipe in the database', async () => {
    const recipes = await Recipe.find();
    expect(recipes.length).toBeGreaterThan(0);
    expect(recipes[0].title).toBe("CI Test Recipe");
  });
});
