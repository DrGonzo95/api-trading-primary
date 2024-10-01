const request = require('supertest');
const app = require('../server');

describe('Auth Controller', () => {
    it('should authenticate user and return a token', async () => {
        const res = await request(app)
            .post('/auth/login')
            .send({ username: 'test', password: 'test' });
        
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('token');
    });
});
