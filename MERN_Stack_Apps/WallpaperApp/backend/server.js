require('dotenv').config();
const express  = require('express');
const app      = express();
const mongoose = require('mongoose');
const cors     = require('cors');

const userRts  = require('./routes/users');
const wallRts  = require('./routes/walls');

app.use(cors());
app.use(express.json());

//Serve static files to client
app.use('/uploads',express.static("uploads"));

//Let app use wall routes
app.use('/api/walls',wallRts)

//Let app use user routes
app.use('/api/users',userRts);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Connected to DB and Listening at ${process.env.PORT}`)})
}).catch(error=>{
    console.log(error)
})