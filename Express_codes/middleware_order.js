// in the following, the first function executes first, then the route handler and then the end function. This example summarizes how to use middleware before and after route handler;
var express = require('express');
var app = express();
app.use(function(req, res, next){
   console.log("Start");
   next();
});//First middleware before response is sent
app.get('/', function(req, res, next){
   res.send("Middle");
   next();
}); //Route handler
app.use('/', function(req, res){
   console.log('End');
});
// When we visit '/' after running this code, we receive the response as Middle and on our console − Start
//                   End
app.listen(3000);