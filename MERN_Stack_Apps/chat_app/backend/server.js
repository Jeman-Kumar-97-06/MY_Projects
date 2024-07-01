require('dotenv').config();
const express     = require('express');
const mongoose    = require('mongoose');
const cors        = require('cors');

const ChatMessage = require('./models/ChatMessage');

const app         = express();
const PORT        = process.env.PORT;

app.use(cors());
app.use(express.json());

//GET all messages
app.get('/messages',async (req,res)=>{
    try{
        const messages = await ChatMessage.find();
        res.json(messages);
    } catch (err) {
        console.error(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

//POST a new message
app.post('/messages',async (req,res)=> {
    try {
        const {user,message} = req.body;
        if (!user || !message) {
            return res.status(400).json({error:'User and message are required'});
        }
        const chatMessage = new ChatMessage({user,message});
        await chatMessage.save();
        res.status(201).json(chatMessage);
    } catch (err) {
        console.error(err);
        res.status(500).json({error:"Internal Server Error"});
    }
});

//connect to server and get ready to listen requests.
mongoose.connect(process.env.MONGO_URL).then(app.listen(PORT,()=>{console.log(`Listening at ${PORT}`)})).catch(err=>{console.log(err)});