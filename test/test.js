const request = require("supertest");
const app = require("../index");
describe("GET /", () => {
  it("respond with Hello World via github actions", (done) => {
    request(app).get("/").expect("Hello World via github actions", done);
  })
});