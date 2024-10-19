var express = require('express');
var app = express();

app.get('/value', function(req,res){
    res.render('dynamic',{
        name : "passByValue",
        url : "http://www.youtube.com"
    });
});

app.listen(3000);