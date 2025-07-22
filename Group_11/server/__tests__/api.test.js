const app = require('../app');
const request = require('supertest');

describe('Recipes API', () => {
    it('GET /api/recipes should return 200', async () => {
        const response = await request(app).get('/api/recipes');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
    });
});
