const supertest = require('supertest');
const app = require('./app');

describe('Test Suite app', () => {

    it('Test Case 1: health-check validation', async () => {
        const respuesta = await supertest(app).get('/').send();
        expect(respuesta.statusCode).toBe(200);
        expect(respuesta.text).toBe('Ok!');
    })

})
