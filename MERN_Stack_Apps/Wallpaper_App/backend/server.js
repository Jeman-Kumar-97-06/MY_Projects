require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app      = express();

//const wallRrts = require('./routes/walls');


mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("Connected to DB and listening to requests")})
}).catch((error)=>{console.log(error)});