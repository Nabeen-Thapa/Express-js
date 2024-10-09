//accress by route

var express = require('express');
var app = express();

app.get('/middleware',function(req,res, next){
    console.log("a new request received at :" + Date.now());
    next();
}); //this will show in console
// output: a new request received at :1728477337066
//         a new request received at :1728477338921

app.get('/middleware', function(req,res){
    res.send('middleware performing in console');
});//thi will show in the browser
//output : middleware performing in console
app.listen(4444);