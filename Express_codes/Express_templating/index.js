//express templating -pug

var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/set', (req,res)=>{
    res.render('first_view',{title:'welcome to pug', message:'hello this is pug exaple' });
}); app.listen(55555);