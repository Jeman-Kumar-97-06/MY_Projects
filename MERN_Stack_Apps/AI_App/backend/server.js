require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const app     = express();
const mongoose = require('mongoose');

const pRt     = require('./routes/prompts')
const uRt     = require('./routes/users');



app.use(express.json());
app.use(cors());


app.use('/api/users',uRt);
app.use('/api/prompts',pRt);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to DB and Listening to requests")
    })
}).catch(err=>{console.log(err)})