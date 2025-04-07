require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');

const uRts     = require('./routes/users');
const pRts     = require('./routes/prompts');

const app      = express();

//CORS
app.options("*", cors()); 
app.use(cors({
    origin: ['http://localhost:5173','https://imagegen0603-egt0qv5yn-jemans-projects.vercel.app','https://api.imagepig.com'], // Change this to your frontend URL
    //origin:['*'],
    methods: ['GET', 'POST', 'PUT','PATCH','DELETE'],
    // Allows both Content-Type and Authorization:
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use('/api/users',uRts);
app.use('/api/prompts',pRts);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to database and listening at ",process.env.PORT);
    })
}).catch(error=>{console.log('Server Connection error:',error)})