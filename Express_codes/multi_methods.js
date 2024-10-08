// We can also have multiple different methods at the same route. For example,
var express=require('express');
var app = express();

app.get('/hello', function(req, res){
    res.send("hello, this is get method 1");
});
app.get('/hello', function(req, res){
    res.send("You just called the post method at '/hello'!\n");
});
app.listen(4100); //localhost:2100
