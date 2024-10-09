//dynamic url with multiple paramenters

var express = require('express');
var app = express();

//passing multiple parameters
app.get('/:id/:name/:address', function(req, res){
    res.send('id is:\"' + req.params.id + "\" name is: \""+ req.params.name + "\" address is: \""+ req.params.address +"\"");
});
app.listen(2200);