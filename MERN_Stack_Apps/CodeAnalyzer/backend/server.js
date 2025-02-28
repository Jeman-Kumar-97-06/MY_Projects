require('dotenv').config();
const express                   = require('express');
const app                       = express();
const {GoogleGenerativeAI:ggAI} = require('@google/generative-ai');
const genAI                     = new ggAI(`${process.env.GEMINI_K}`);
const model                     = genAI.getGenerativeModel({model:"gemini-1.5-flash"});
const cors                      = require('cors')

app.use(express.json());
app.use(cors());

app.post('/api/askAI',(req,res)=>{
    console.log(req.body)
})

app.listen(process.env.PORT,()=>{console.log("Listening at ",process.env.PORT)});
