const request = require('supertest');
const app = require('../app');

describe('Test de la route citation de l\'application', () => {

	test('GET /quote doit retourner 200', async () => {
		const response = await request(app).get('/quote');
		expect(response.statusCode).toBe(200);
	});

    test("GET /quote doit retourner 200 et contenir un mot", async () => {
        const response = await request(app).get('/quote');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('word'); // Vérifie que "word" existe dans la réponse
        expect(typeof response.body.word).toBe('string'); // Vérifie que c'est une string
    });

});