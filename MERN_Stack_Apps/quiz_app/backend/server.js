require('dotenv').config();
const express     = require('express');
const mongoose    = require('mongoose');
const cors        = require('cors');

const ChatMessage = require('./models/ChatMessage');

const app         = express();
const PORT        = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//get all messages
app.get('/messages',async (req,res)=>{
    try {
        const messages = await ChatMessage.find();
        res.json(messages);
    } catch (error){
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
    }
});

//post a message
app.post('/messages',async(req,res)=>{
    try{
        const {user,message} = req.body;
        if(!user || !message) {
            return res.status(400).json({error:"User and Message are required!"});
        }
        const chatMessage = new ChatMessage({
            user,
            message,
        });
        await chatMessage.save();
        res.status(201).json(chatMessage);
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error!"});
    }
});

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(PORT,()=>{console.log(`Listening at port ${PORT}`)});
}).catch(err=>{console.log(err)});