const supertest = require('supertest');
const app = supertest('http://localhost:3000');

describe("Test path date", () => {
    test("It should response the GET method", async () => {
        let response = await app.get("/date");
        expect(response.statusCode).toBe(200);
    });
    test("It should response with JSON", async () => {
        let response = await app.get("/date");
        console.log(response.body.toString());
        expect(response.headers['content-type'].toString()).toMatch(/json/);
    });
    test("It should body match Date string", async () => {
        let response = await app.get("/date");
        expect(response.body['message'].toString()).toMatch(/Hello, the current date is/);
    });
});
