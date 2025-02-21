require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const wallRts  = require('./routes/walls');
const userRts  = require('./routes/users');

const app      = express();

app.use(cors());
app.use(express.json());

//Serve static files to client
app.use('/uploads',express.static("uploads"));

//Using wallRts at '/api/walls'
app.use('/api/walls',wallRts);

//Using userRts at '/api/users'
app.use('/api/users',userRts);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("Connected to DB and listening to requests")})
}).catch((error)=>{console.log(error)});