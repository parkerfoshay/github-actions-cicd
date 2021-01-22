const request = require("supertest");
const app = require("../index");
describe("GET /", () => {
  it("respond with It works Clark!", (done) => {
    request(app).get("/").expect("It works Clark!", done);
  })
});