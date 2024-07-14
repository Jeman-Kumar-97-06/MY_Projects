require('dotenv').config();
const mongoose = require('mongoose');
const exp      = require('express');
const app      = exp();

app.get('/',(req,res)=>{
    res.json({mssg:"Welcom !"});
});

app.listen(process.env.PORT,()=>{console.log(`Listening at ${process.env.PORT}`)});