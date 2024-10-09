//pattern or regex based routes
//-Let us assume you need the id to be a 5-digit long number

var express = require('express');
var app = express();
//id([0-9]{5}) means user can only enter 5 digit long number
app.get('/pattern/:id([0-9]{5})', function(req, res){
    res.send("id is: " +req.params.id);
});
//if user enter 5 digit number then it show that number as output
//e.g id= 21231 output : id is: 21231
//else it show error as 
//e.g id= 34 output : Cannot GET /pattern/34
//error message(if pattern not matched) replaced by a 404 not found page using this simple route −
app.get('*', function(req, res){
    res.send('Sorry, this is an invalid URL.');
 });//now output : Sorry, this is an invalid URL.
 //Important − This error message should be placed after all your routes


app.listen(2222);