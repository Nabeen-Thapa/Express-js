var bodyParser = require('body-parser');
var express = require('express');
var app = express();
//parse url encoded data
app.use(bodyParser.urlencoded({exrended:false}))

//parse json data 
app.use(bodyParser.json());

// Sample route to test POST request
app.post('/test', (req, res) => {
    res.json({ message: 'Data received', data: req.body });
  });
  
  // Start the server
  app.listen(3000);