const Quest     = require('../models/questModel');
const mongoose  = require('mongoose');

const getQuestions = async (req,res) => {
    const ten_quests = await Quest.aggregate([{$sample:{size:10}}]);
    res.status(200).json(ten_quests);
}

module.exports = {getQuestions};