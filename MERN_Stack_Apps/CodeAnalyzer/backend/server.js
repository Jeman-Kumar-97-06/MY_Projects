require('dotenv').config();
const express                   = require('express');
const app                       = express();
const {GoogleGenerativeAI:ggAI} = require('@google/generative-ai');
const genAI                     = new ggAI(`${process.env.GEMINI_K}`);
const model                     = genAI.getGenerativeModel({model:"gemini-1.5-flash"});
const cors                      = require('cors')

app.use(express.json());
app.use(cors({
    origin: "https://67c49b7bbd18d6a041249fef--stupendous-centaur-979a4d.netlify.app/", // Replace with your Netlify frontend URL
    methods: "POST",
    allowedHeaders: "Content-Type"
  }));

app.post('/api/askAI',async (req,res)=>{
    const prompt = `
        You are a professional code reviewer. Analyze the following ${req.body.language} code for errors, security issues, performance improvements, and best practices. Provide clear suggestions:

        CODE:
        ${req.body.code}
        `;
    const result = await model.generateContent(prompt);
    if (!result){
        return res.status(404).jsonn({error:"Sorry something is not working"})
    }
    return res.status(200).json({resp:result.response.text().replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')  // Convert **bold** to <b>bold</b>
        .replace(/\n\n/g, '<br><br>')            // Paragraph breaks
        .replace(/\n/g, '<br>')                  // Newlines
        .replace(/```(.*?)```/gs, '<pre><code>$1</code></pre>')});
})

app.post('/api/AIsolve',async (req,res)=>{
    const prompt = `
        Solve the following problem statement and give me the solution code in ${req.body.language}. I repeat, only give me the code:
        PROBLEM STATEMENT:
        ${req.body.prob}
    `
    const result = await model.generateContent(prompt);
    return res.status(200).json({resp:result.response.text().replace(/```(javascript|js)?\n?/g, '').replace(/```\n?/g, '')});
})

app.listen(process.env.PORT,()=>{console.log("Listening at ",process.env.PORT)});
