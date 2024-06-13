const express = require('express');
const app     = express();
const questions_data = require('./data/questionare.json');


app.set('view engine','ejs'); 

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/security_assessment',(req,res)=>{
    res.render('questionaire.ejs',{data:questions_data});
})

app.listen(3000,()=>{console.log("listening to requests at 3000")});