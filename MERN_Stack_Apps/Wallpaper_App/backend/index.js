require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');

const app      = express();

app.use(cors());
app.use(express.json());

app.use('/api/wallpapers',wRt);
app.use('/api/user',uRt);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Connected to DB and listening at ${process.env.PORT}`)});
}).catch(error=>{console.log(error)});