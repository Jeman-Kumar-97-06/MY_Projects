require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const app      = express();
const mongoose = require('mongoose');
const pRt      = require('./routes/posts');
const uRt      = require('./routes/users');

app.use(express.json());
app.use(cors());

app.use('/api/posts',pRt);
app.use('/api/users',uRt);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Connected to Database & Listening to Requests at ${process.env.PORT}`)
    })
});
