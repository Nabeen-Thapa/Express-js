//index.js for cookie
import cookieParser from 'cookie-parser';
import express from 'express';
var app = express();
app.use(cookieParser());

app.get('/', function(req, res){
    //res.cookie('name', 'nabin').send('cookie set'); //Sets name = express
    //set expire time on cookie- Expires after 360000 ms from the time it is set.
res.cookie(name, "shyam", {expire: 3600 + Date.now()});
//This cookie also expires after 360000 ms from the time it is set.
res.cookie(newname, 'ram', {maxAge: 36000000});
});

//deleting cookie
app.get('/clear_cookie', function(req, res){
    res.clearCookie('name');
    res.send('cookie nabin cleared');
 });
 
 app.listen(3000,()=>{
    console.log("session server running");
 });
 //To check if your cookie is set or not, just go to your browser, fire up the console, and enter −
//console.log(document.cookie);

