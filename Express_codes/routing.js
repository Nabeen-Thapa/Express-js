//router -
// app.method(path, handler)

var express = require('express'); 
var app = express();

app.get('/routing', function(req,res){
    res.send("hello, this is routing example");
});
app.listen(3000); //http://localhost:3000/routing    -open this in brower
//output :hello, this is routing example