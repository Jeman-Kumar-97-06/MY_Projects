const Chat    = require('../models/Chat');

const getAllMsgs = async (req,res) => {
    const messages = await Chat.find({}).sort({timestamp: -1});
    req.json(messages);
};

const storeAMsg = async (req,res) => {
    const {sender, message} = req.body;
    const chat = await Chat.create({sender, message});
    res.json(chat);
};

module.exports = {getAllMsgs,storeAMsg};