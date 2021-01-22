const request = require('supertest')
const app = require('../index')
const { describe, it } = require('mocha')
describe('GET /', () => {
  it('respond with It works Clark!', (done) => {
    request(app).get('/').expect('It works Clark!', done)
  })
})
