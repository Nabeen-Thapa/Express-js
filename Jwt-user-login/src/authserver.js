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

let refreshTokens = []
//for the token
app.post('/token', (req, res)=>{
    const refreshToken = req.body.token
    if (refreshToken == null) return res.sendStatus(401);
    if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
        if(err) return res.sendStatus(403);
        const accessToken = generateAccessToken({username :user.username});
        res.json({accessToken :accessToken})
    })
})

// Protected route (only accessible with a valid JWT)
app.get('/posts', authenticateToken, (req, res) => {
    res.json(posts.filter(post => post.username === req.user.username));
});

//to deauthenticate
app.delete('/logout',(req, res)=>{
    refreshTokens = refreshTokens.filter(token => token != req.body.token)
    res.sendStatus(204);
})


// Login route to generate JWT
app.post('/login', (req, res) => {
    console.log(req.body); // Check the incoming body
    const username = req.body.username;
    if (!username) {
        return res.status(400).send('Invalid request');
    }
    const user = { username: username };
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    res.json({ accessToken: accessToken, refreshToken: refreshToken });
});

// Function to generate access token
function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' }); // Use expiresIn
}

// Middleware to authenticate token
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.sendStatus(401); // If token is missing
    
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // If token is invalid
        req.user = user; // Store user info from token
        next(); // Continue to the next middleware or route handler
    });
}

// Server setup
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
