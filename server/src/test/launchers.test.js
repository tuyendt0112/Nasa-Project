const request = require("supertest");
const assert = require("assert"); // Import assert module
const app = require("../app");

describe("GET launchers", function () {
  it("responds all launcher", async function () {
    const response = await request(app).get("/");
    assert.strictEqual(response.status, 200); // Use assert.strictEqual for strict equality check
    // Add additional expectations based on your application logic
  });

  it("add new launcher", async function () {
    const newLauncher = {
      mission: "Mission test",
      rocket: "Explorer IS1",
      launchDate: "2023-11-10T00:00:00.000Z",
      target: "Kepler-1652 b",
    };
    const response = await request(app).post("/").send(newLauncher);
    assert.strictEqual(response.status, 201);
  });

  it("add new launcher - wrong-missing input", async function () {
    const newLauncher = {
      mission: "Mission test",
      rocket: "Explorer IS1",
      launchDate: "Fri Dec 27 2030",
      target: "Kepler-1652 b",
    };
    const response = await request(app).post("/").send(newLauncher);
    assert.strictEqual(response.status, 400);
  });

  it("delete a launcher -not found launch id", async function () {
    const id = 100;
    const response = await request(app).delete(`/${id}`);
    assert.strictEqual(response.status, 404);
  });
});
