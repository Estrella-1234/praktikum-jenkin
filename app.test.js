const request = require('supertest');
const app = require('./app'); // Import the app

describe('Express App Routes', () => {

    afterAll(() => {
        server.close(); // Close the server to free resources
    });
    
    // Test for Home Route
    it('GET / should respond with Welcome to the Home Route!', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Welcome to the Home Route!' });
    });

    // Test for About Route
    it('GET /about should respond with This is the About Route!', async () => {
        const res = await request(app).get('/about');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'This is the About Route!' });
    });

    // Test for Echo Route
    it('POST /echo should respond with Echo: <data>', async () => {
        const testData = { data: 'Hello, World!' };
        const res = await request(app).post('/echo').send(testData);
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Echo: Hello, World!' });
    });
});
