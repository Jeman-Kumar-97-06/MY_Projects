const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const videoRoutes = require('./routes/videos');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/uploads',express.static('uploads'));

mongoose.connect(process.env.MONGOURL,{useNewUrlParse:true,useUnifiedTopology:true}).then(()=>{
    console.log("MongoDB connected!")
}).catch(err=>console.log(err))