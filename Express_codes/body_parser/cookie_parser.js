var cookieParser = require('cookie-parser');
var express = require('express');
var app = express();

// Use cookie-parser middleware
app.use(cookieParser());

// Route to set a cookie
app.get('/setcookie', (req, res) => {
  // Set a cookie named 'user' with the value 'John Doe'
  res.cookie('user', 'Nabin', { maxAge: 3600000 }); // 1 hour expiration
  res.send('Cookie has been set');
});

// Route to get a cookie
app.get('/getcookie', (req, res) => {
  // Access cookies stored in the request
  const userCookie = req.cookies['user'];
  res.send(`Cookie retrieved: ${userCookie}`);
});

// Route to clear a cookie
app.get('/clearcookie', (req, res) => {
  // Clear the 'user' cookie
  res.clearCookie('user');
  res.send('Cookie has been cleared');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
