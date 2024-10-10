const express = require('express');
const Prompt  = require('../models/popularPromptModel');
const router  = express.Router();
const requireAuth = require('../middleware/requireAuth');

const { GoogleGenerativeAI } = require("@google/generative-ai");

const getPrompts = async (req,res) => {
    const user_id  = req.user._id;
    const all_prompts = await Prompt.find({user_id}).sort({createdAt:-1});
    res.status(200).json(all_prompts);
}

const gotPrompt = async (req,res) => {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const {prompt} = req.body;
    try{
        const user_id  = req.user._id;
        const exists   = await Prompt.findOne({prompt:prompt.toLowerCase()});
        if (prompt!=='' && !exists){
            const new_prompt = await Prompt.create({prompt:prompt.toLowerCase(),user_id});
        }
        
    }
    catch(error){
        return
    }
    const result = await model.generateContent(prompt);
    res.status(200).json({result:result.response.text()});
}

router.use(requireAuth);

router.get('/',getPrompts);

router.post('/',gotPrompt)

module.exports = router;