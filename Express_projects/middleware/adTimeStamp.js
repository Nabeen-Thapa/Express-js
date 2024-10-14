var express = require('express');
var app = express();
var fs = require('fs');

const addTimestamp = (req, res, next) => {
    const timestamp = new Date().toISOString();  // Capture the current timestamp
    const originalJson = res.json;  // Save the original res.json function
   
    // Override the res.json function
    res.json = function (body) {
      body.timestamp = timestamp;  // Add timestamp to the response body
      return originalJson.call(this, body);  // Call the original res.json
    };
  
    next();  // Move to the route handler
  };
  app.use(addTimestamp);

  //for the browser 
  app.get('/',(req,res)=>{
    res.json({message: 'time stamp run successfully'});
  });

app.listen(4444, () => {
    console.log('Server running on port 4444');
});
