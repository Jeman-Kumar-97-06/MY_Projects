const mongoose = require('mongoose');
const convoSchema = new mongoose.Schema({
    participants : [{type:mongoose.Schema.Types.ObjectId,ref:"ChatUser"}],
    messages : [{type:mongoose.Schema.Types.ObjectId,ref:"ChatMessage",default:[]}],
},{timestamps:true})

const Convo = mongoose.model("ChatConvo",convoSchema);
module.exports = Convo;