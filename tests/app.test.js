const request = require("supertest");
const app = require("../app");

describe("Mini DevOps Pipeline API", () => {
test("Home page should return HTTP 200", async () => {
const response = await request(app).get("/");


    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Mini DevOps Pipeline");
});

test("Health endpoint should return healthy status", async () => {
    const response = await request(app).get("/api/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
    expect(response.body.application).toBe("mini-devops-pipeline");
});


});
