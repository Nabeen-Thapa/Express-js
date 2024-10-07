var express= require('express');
var app = express();
//at how page
app.get('/', function(req,res){
    res.send("hello world, this is home page");
});

//accress through other link

app.get('/hello', function(req,res){
    res.send("hello world, you are accressing this form link");
});

app.listen(3000);