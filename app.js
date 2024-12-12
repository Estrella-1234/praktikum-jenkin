const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Route 1: Home route
app.get('/', (req, res) => {
    res.send({ message: 'Welcome to the Home Route!' });
});

// Route 2: About route
app.get('/about', (req, res) => {
    res.send({ message: 'This is the About Route!' });
});

// Route 3: Echo route
app.post('/echo', (req, res) => {
    const { data } = req.body;
    res.send({ message: `Echo: ${data}` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

module.exports = app; // Export for testing
