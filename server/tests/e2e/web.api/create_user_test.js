const request = require('supertest');
const assert = require('assert');
const webApi = require('../../../web.api/server');

describe('Test user controller', () => {
    it('Can create a user', () => {

        request(webApi)
            .post('/api/users')
            .send({ firstName: 'fabrice', lastName: 'yao' })
            .end((err, res) => {

            });
    });
});