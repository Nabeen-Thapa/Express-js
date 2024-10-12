var express = require('express');
var app = express();
var fs = require('fs');
// Middleware to log IP address and request method
//it write date and ip in the 
app.use('/', (req, res, next) => {
    const log = `${new Date().toISOString()} : ${req.ip} : ${req.method}\n`;  
    fs.appendFile('log.txt', log, (err) => {
        if (err) {
            console.error('error occour:', err);  // return error if any files occour or file not found 
        }
    });
   next();  // Pass control to the next middleware or route handler
});
// to get or show in the brwser
app.get('/', (req, res) => {
    res.send(`Your IP is: ${req.ip}, and request was made at: ${new Date().toISOString()}`);
});
//to show in console
app.get('/console', function(req, res, next){
    console.log(`your ip is :${req.ip}`);
    next();
},
    function(req, res, next){
       console.log(`and your request time is :${new Date().toISOString()}`);
        next();
    }
)
app.listen(4444, () => {
    console.log('Server running on port 4444');
});
