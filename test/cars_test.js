const {assert}= require('chai');
const request = require('supertest');
const app = require('../app');

const path='/api/cars/';
const path2='/api/car';

describe('GET /api/cars/:id', ()=>{
    it('Responds with true ', async()=>{
        const res = await request(app).get('/api/cars/:id').send({
            userid:4
        })
        assert.equal(res.statusCode, 201);
        assert.isTrue(res.body.success);
        assert.ok(res.body.cars);
    });

   

})


describe('GET /api/cars/:id', ()=>{ 
    it('Responds with fail: false; id is not valid', async()=>{
        const res = await request(app).get('/api/cars/:id').send({
            userid:11
        })
        assert.equal(res.statusCode, 400);
        assert.isFalse(res.body.success);
    
    })
})


/*

describe('PUT /api/subjects/', () => {
  it('updates subjects name and responds with success: true', async () => {
    const res = await request(app)
      .put('/api/subjects')
      .send({
        id: subjectId,
        name: 'Updated Subject'
      })
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
  });
  it('updates subjects lecturer and responds with success: true', async () => {
    const res = await request(app)
      .put('/api/subjects')
      .send({
        id: subjectId,
        lecturerId: lecturerId
      })
      .set('Authorization', 'Bearer ' + token);
    assert.equal(res.statusCode, 200);
    assert.isTrue(res.body.success);
  });
}*/