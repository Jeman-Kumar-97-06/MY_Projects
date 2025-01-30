require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const videoRoutes = require('./routes/videos');
const userRoutes  = require('./routes/auth');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/uploads',express.static('uploads'));

//Video Routes
app.use('/api/videos',videoRoutes);
//User Routes
app.use('/api/users',userRoutes);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Listening at ${process.env.PORT}`)})
}).catch(err=>console.log(err))