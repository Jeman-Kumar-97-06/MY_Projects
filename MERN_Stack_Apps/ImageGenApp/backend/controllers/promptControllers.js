const mongoose = require('mongoose');
const Prompts  = require('../models/promptModel');

//Send all the prompt to the client : 
const getPrompts = async (req,res) => {
    const all_prompts = await Prompts.find({});
    if (!all_prompts) {
        return res.status(404).json({error:"No Prompts!"});
    };
    res.status(200).json(all_prompts);
};

//Save a prompt :
const savePrompts = async (req,res) => {
    console.log(req.body);
}

const saveGeneratedImage = async (req,res) => {
    console.log(req.body);
}

module.exports = {getPrompts, savePrompts, saveGeneratedImage};