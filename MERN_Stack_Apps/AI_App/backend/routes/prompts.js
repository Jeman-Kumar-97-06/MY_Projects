const express = require('express');
const Prompt  = require('../models/popularPromptModel');
const router  = express.Router();
const requireAuth = require('../middleware/requireAuth');

const getPrompts = async (req,res) => {
    const user_id  = req.user._id;
    const all_prompts = await Prompt.find({user_id}).sort({createdAt:-1});
    res.status(200).json(all_prompts);
}

router.use(requireAuth);

router.get('/',getPrompts);

module.exports = router;