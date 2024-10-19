var express = require('express');
var app = express();

// GET request
app.get('/hello', function(req, res){
    res.send("Hello, this is the GET method");
});

// POST request
app.post('/hello', function(req, res){
    res.send("You just called the POST method at '/hello'!");
});


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
