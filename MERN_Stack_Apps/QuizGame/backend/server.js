require('dotenv').config();

const exp      = require('express');
const app      = exp();

const mongoose = require('mongoose');
const cors     = require('cors');

app.use(cors());
app.use(exp.json());

app.get('/',(req,res)=>{
    res.render('index');
})


mongoose.connect(process.env.MONGOURL).then(()=>{app.listen(process.env.PORT,()=>{console.log(`Listening at ${process.env.PORT}`)})}).catch(err=>{console.log(err)}); 