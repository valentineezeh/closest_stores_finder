import supertest from 'supertest';
import should from 'should';
import dotenv from 'dotenv';

dotenv.config();

const app = supertest.agent('http://localhost:4000');

describe('Backend API endpoint', () => {
  it('should get the welcome address', (done) => {
    app
      .get('/')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.message.should.equal('Welcome to Jumbo API.');
        done();
      });
  });
  it('should fetch all stores', (done) => {
    app
      .get('/stores')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
  it('should fetch 5 nearby stores to a particular location', (done) => {
    app
      .post('/closest/stores')
      .set('Content-Type', 'application/json')
      .send({
        uuid: 'AnYKYx4X2vcAAAFInAsYwKxK',
        longitude: '6.494559',
        latitude: '52.464503'
      })
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        res.body.data.length.should.equal(5);
        done();
      });
  });
});
