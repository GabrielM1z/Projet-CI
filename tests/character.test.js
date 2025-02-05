const request = require('supertest');
const app = require('../app');

describe('Test de la route character de l\'application', () => {

    test("GET /character doit retourner 200 et contenir un url et un nom de perso", async () => {
        const response = await request(app).get('/character');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('character');
        expect(response.body).toHaveProperty('url');
    });

});