//session_index.js for the session
import express from 'express';
import cookieParser from 'cookie-parser';
import session from 'express-session';
var app = express();

app.use(cookieParser());
app.use(session({secret : "hey its secert code"}));

app.get('/', (req,res)=>{
    if(req.session.page_views){
        req.session.page_views++; //it will increment by 1 in every page refresh
        res.send(`you visit this oage ${req.session.page_views
        } times`);
    }else{
        req.session.page_views = 1;
        res.send("welcome tot htis page first time");
    }
});
app.listen(4000,(req,res)=>{
    console.log("session server runnig")
});