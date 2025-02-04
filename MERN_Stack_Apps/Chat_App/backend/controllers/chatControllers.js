const express = require('express');
const Chat = require('../models/Chat');

const router = express.Router();

const getAllMsgs = async (req,res) => {
    const messages = await Chat.find().sort({timestamp: -1});
    req.json(messages);
};

const storeAMsg = async (req,res) => {
    const {sender, message} = req.body;
    const chat = new Chat({sender, message});
    await chat.save();
    res.json();
};

module.exports = {getAllMsgs,storeAMsg};