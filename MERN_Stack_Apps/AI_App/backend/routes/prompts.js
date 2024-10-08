const express = require('express');
const Prompt  = require('../models/popularPromptModel');
const router  = express.Router();

const getPrompts = async (req,res) => {
    const user_id  = req.user._id;

    const all_prompts = await Prompt.find({user_id}).sort({createdAt:-1});
    res.status(200).json(all_prompts);
}

router.get('/',getPrompts);

module.exports = router;