//app.js for static files
import express from 'express';
import path from 'path';
const app = express();

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'viewm'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/static', (req, res)=>{
    res.render('view');
})

app.listen(3000, ()=>{
    console.log(`server running`);
});