const request = require('supertest');
const app = require('../app');
const db = require('./db');
const { before, beforeEach, after } = require('mocha');
const { expect } = require('chai');

// Pass supertest agent for each test
const agent = request.agent(app);

// Setup connection to the database
before(async () => await db.connect());
beforeEach(async () => await db.setUp());
after(async () => await db.close());


describe('Users', () => {

  // We just don't want to seed with _ids. If we just seed the data, mongodb-memory-server will auto-generate _id's for us.



  describe('GET /api/users', () => {

    const baseUrl = '/api/users';


    it('It should get users', done => {
      const url = baseUrl;

      agent
        .get(url)
        .expect(200)
        .then(res => {
          console.log('res.body: ', res.body);
          const users = res.body;
          expect(users.length).to.be.equal(3);
          done();
        });
    });
  });

  describe('GET /api/users/:id', () => {
    const userId = '65aa97cfc372156a30ad7c51';
    const url = `${baseUrl}/${userId}`;

    it('It should get a user by id', done => {
      agent
        .get(baseUrl)
        .expect(200)
        .then(res => {

          const users = res.body;
          const firstUser = users[0];

          agent.get(url).expect(200).then(res => {
            console.log('res.body: ', res.body);
            const user = res.body;
            expect(user.length).to.be.equal(1);
          })

          done();
        });
    });
  });


});