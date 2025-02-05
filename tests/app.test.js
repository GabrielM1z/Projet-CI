const request = require('supertest');
const app = require('../app');

describe('Test des routes de l\'application', () => {

	test('GET / doit retourner 200', async () => {
		const response = await request(app).get('/');
		expect(response.statusCode).toBe(200);
	});

	test('GET /route-inexistante doit retourner 404', async () => {
		const response = await request(app).get('/route-inexistante');
		expect(response.statusCode).toBe(404);
		expect(response.body).toHaveProperty('error', 'Not Found');
	});

});