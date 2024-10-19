// app.js for controller 

const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes'); // Import the user routes

// Middleware to parse JSON request bodies
app.use(express.json()); // This is important to handle JSON data sent in requests

// Use user routes for the API
app.use('/', userRoutes); // '/api' is the prefix for all user routes

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
