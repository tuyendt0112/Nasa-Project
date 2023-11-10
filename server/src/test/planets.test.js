const request = require("supertest");
const app = require("../app");
const assert = require("assert"); // Import assert module
describe("GET planets", function () {
  it("responds all planets", async function () {
    const response = await request(app).get("/");
    assert.strictEqual(response.status, 200);
  });
});

// module.exports = describe;
