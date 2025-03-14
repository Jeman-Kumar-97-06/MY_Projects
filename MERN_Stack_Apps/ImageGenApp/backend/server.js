require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const uRts     = require('./routes/users');
const pRts     = require('./routes/prompts');

const app      = express();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Change this to your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api/users',uRts);
app.use('/api/prompts',pRts);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to database and listening at ",process.env.PORT);
    })
}).catch(error=>{console.log('Server Connection error:',error)})