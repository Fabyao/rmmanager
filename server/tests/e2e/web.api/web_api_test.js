const request = require('supertest');
const assert = require('assert');
const webApi = require('../../../web.api/server');

describe('The web api', () => {
    it('handles GET request to /api', (done) => {

        request(webApi)
            .get('/api')
            .end((err, res) => {
                assert(res.body.hi === 'there')
                done();
            });
    });
});