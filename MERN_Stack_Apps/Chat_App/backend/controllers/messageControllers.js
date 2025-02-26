const Conversation = require('../models/conversationModel');
const Message      = require('../models/messageModel');
const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const {id:receiverId}      = req.params;//The id of the person receiving the message
        const senderId  = req.user._id;//The id of the person sending the message [we get this from the req object after the requireAuth is executed]
        let conversation = await Conversation.findOne({
            participants : {$all:[senderId,receiverId]}
        });

        if (!conversation) {//if there isn't a conversation create one:
            conversation = await Conversation.create({
                participants : [senderId,receiverId]
            })
        }
        const newMessage = new Message({
            senderId:senderId,
            receiverId : receiverId,
            message : message
        })
        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }
        //Socket functionality will go here :
        await conversation.save();
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        console.log("Error in sendMessage Controller: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

const getMessages = async (req,res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants : {$all : [senderId,userToChatId]}
        })
    } catch (error) {
        
    }
}

module.exports = {sendMessage,getMessages}