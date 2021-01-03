const {assert}= require('chai');
const request = require('supertest');
const app = require('../app');

const path='/api/users';

describe('GET ${path}', ()=>{
    it('Responds with success: tue and list of users', async()=>{
        const res = await request(app).get(path)
        assert.equal(res.statusCode, 200);
        assert.isTrue(res.body.success);
        assert.ok(res.body.users);
    })
})