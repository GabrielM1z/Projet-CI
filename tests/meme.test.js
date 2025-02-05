const request = require('supertest');
const app = require('../app');

describe('Test de la route citation de l\'application', () => {

	test('GET /meme doit retourner 200', async () => {
		const response = await request(app).get('/meme');
		expect(response.statusCode).toBe(200);
	});

    test("GET /meme doit retourner 200 et contenir un mot", async () => {
        const response = await request(app).get('/meme');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('meme'); // Vérifie que "meme" existe dans la réponse
        expect(typeof response.body.meme).toBe('string'); // Vérifie que c'est une string
    });

});