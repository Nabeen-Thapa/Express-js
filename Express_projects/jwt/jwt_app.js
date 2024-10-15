const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const app = express();

// Use this middleware to parse JSON bodies
app.use(express.json()); // Ensure this line is present to parse the JSON body

//jwt signing secret key
const jwt_secret = 'secret123';

//storing user data for login
const users = [
    {
        id: 1, username: 'Nabin', password: bcrypt.hashSync('nabin123', 10)
    }
];
//middleware for protection
const authToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; //split authHeader where request token is stored in the  "authorization: Bearer <token>" formlat it split this format and access token that is in 1 index of array 
    if (token == null) return res.status(401).json({ message: "missing token" });
    jwt.verify(token, jwt_secret, (err, user) => {
        if (err) return res.status(403).json({ message: "invalid token" });
        req.user = user;
        next();
    })
};
//login route
app.post('/login', (req, res) => {
    const { username, password } = req.body; // this is to acccess the username amd password sended by user or request , username and password are in the body part of request so we use re  .body
    const user = users.find(u => u.username === username); //finding user sended usedname form users where userdata are stored
    if (!user || !bcrypt.compareSync(password, user.password)) { // Fixed 'compareSyn' to 'compareSync'
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    // If valid, create a JWT with the user payload
    const accessToken = jwt.sign({ id: user.id, username: user.username }, jwt_secret, { expiresIn: '1h' });
    res.json({ accessToken });
});

// Protected route (accessible only with a valid token)
app.get('/protected', authToken, (req, res) => {
    res.json({ message: `Hello, ${req.user.username}! This is a protected route.` });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
