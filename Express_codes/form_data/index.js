//index.js file to implement form data
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
var upload = multer();
var app = express();

app.get('/', function(req,res){
    res.render('form');
});

app.set('view engine' , 'pug');
app.set('views', './views');

//for parsing application/json
app.use(bodyParser.json());

//for application/xxwww-
 app.use(bodyParser.urlencoded({extended : true}));

 //for parsing multipart/form-data
app.use(upload.array()); 
app.use(express.static('public'));

app.post('/', function(req, res){
   console.log(req.body);
   res.send("recieved your request!");
});
app.listen(3000, ()=>{
    console.log(`running`);
});