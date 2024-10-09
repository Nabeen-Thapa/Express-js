//dynamic urls creating with single paramenter
var express = require('express');
var app = express();

app.get('/:id', function(req,res){
    res.send('your given parameter is: '+req.params.id);
});
app.listen(3100);