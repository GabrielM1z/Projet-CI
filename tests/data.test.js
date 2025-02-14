const request = require('supertest');
const app = require('../app');

describe('Test de la route data de l\'application', () => {


    test("GET /data doit retourner 200 et contient une compagnie & un vol", async () => {
        const response = await request(app).get('/data');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('airline_flight_number');
        expect(typeof response.body.airline_flight_number).toBe('string');
        expect(response.body).toHaveProperty('airline_name');
        expect(typeof response.body.airline_name).toBe('string');
        expect(response.body).toHaveProperty('full_name');
        expect(typeof response.body.full_name).toBe('string');
        expect(response.body).toHaveProperty('city');
        expect(typeof response.body.city).toBe('string');

        expect(response.body).toHaveProperty('job_title');
        expect(typeof response.body.job_title).toBe('string');
        expect(response.body).toHaveProperty('birthday');
        expect(typeof response.body.birthday).toBe('string');
        expect(response.body).toHaveProperty('card_number');
        expect(typeof response.body.card_number).toBe('string');
        expect(response.body).toHaveProperty('phone_number');
        expect(typeof response.body.phone_number).toBe('string');

    });

});