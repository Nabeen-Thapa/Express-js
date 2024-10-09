//middleware

var express = require('express');
var app = express();

//request time logger
app.use(function(req,res, next){
    console.log("A new requesr receive at :" + Date.now());
    next();
});
app.listen(3333);
//The above middleware is called for every request on the server. So after every request, we will get the following message in the console −
    // output : A new requesr receive at :1728476454822
//              A new requesr receive at :1728476501552
//              A new requesr receive at :1728476503477
