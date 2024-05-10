// src/index.js

const express = require('express');
const app = express();
const port = 5533;

// Routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
