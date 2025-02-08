const Convo = require("../models/convoModel");
const Message = require("../models/messageModel");

const sendMessage = async (req,res) => {
    try {
        const {msg} = req.body;
        const {id:receiverId}      = req.params;
        const senderId  = req.user._id;
        let convo = await Convo.findOne({
            participants : {$all : [senderId, receiverId]}
        });
        if (!convo) {
            convo = await Convo.create({
                participants : [senderId,receiverId]
            })
        }
        const newMsg = new Message({senderId:senderId,receiverId:receiverId,message:msg});
        if (newMsg) {
            convo.messages.push(newMsg._id);
        }
        // await convo.save(); //This line will run first
        // await newMsg.save(); //This line will run second
        await Promise.all([convo.save(),newMsg.save()]);//Both save() ops will run in parallel.
        res.status(201).json(newMsg);
    } catch (error) {
        console.log("Error in sendMessage controller: ",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
}

const getMessages = async (req,res) => {
    try {
        const {id:userToChat} = req.params;
        const senderId        = req.user._id;
        const convo           = await Convo.findOne({participants:{$all:[senderId,receiverId]}}).populate("messages");
        if (!convo) {
            return res.json([]);
        }
        res.status(200).json(convo.messages)
    } catch (error) {
        console.log("Error in getMessages controller: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

module.exports = {sendMessage, getMessages};