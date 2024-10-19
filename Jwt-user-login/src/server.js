require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

// Sample posts data
const posts = [
    {
        username: 'ram',
        title: 'post 1'
    },
    {
        username: 'rama',
        title: 'post 2'
    }
];

// Middleware to authenticate JWT token
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (token == null) return res.sendStatus(401); // If no token is provided

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // If token is invalid or expired
        req.user = user; // Attach the decoded user to the request object
        next(); // Pass to the next middleware or route handler
    });
};

// Protected route (only accessible with a valid JWT)
app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post=>post.username===req.user.username));
});




// Server setup
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
