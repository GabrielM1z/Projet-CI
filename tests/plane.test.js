const request = require('supertest');
const app = require('../app');

describe('Test de la route plane de l\'application', () => {


    test("GET /plane doit retourner 200 et contient une compagnie & un vol", async () => {
        const response = await request(app).get('/plane');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('airline_flight_number');
        expect(typeof response.body.airline_flight_number).toBe('string');
        expect(response.body).toHaveProperty('airline_name');
        expect(typeof response.body.airline_name).toBe('string');
    });

});