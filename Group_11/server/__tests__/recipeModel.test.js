// Import the Recipe model to spy on it
const Recipe = require('../models/recipe');

// Tell Jest to mock this module
jest.mock('../models/recipe');

describe('Recipe Model', () => {
    it('should call find method on Recipe model', async () => {
        // Mock the return value of Recipe.find()
        Recipe.find.mockResolvedValue([{ title: 'Mocked Recipe' }]);

        // Call the function you are testing (in this case directly the mocked model)
        const recipes = await Recipe.find();

        // Check if find was called
        expect(Recipe.find).toHaveBeenCalled();
        expect(recipes[0].title).toBe('Mocked Recipe');
    });
});
