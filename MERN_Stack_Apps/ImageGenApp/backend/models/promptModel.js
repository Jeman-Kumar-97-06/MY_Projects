const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const promptSchema = new Schema({
    // the followinf user refers to "User" model. If you want the corresponding users : 
    // Use : Prompt.find().populate('user','_id'); --> Gets only the _id
    //user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to User
    user : {type:String,required:true},
    texts: [{ type: String}], // Prompt content
    images : [{type: String}],
    createdAt: { type: Date, default: Date.now } // Timestamp
});

module.exports = mongoose.model('imgprompt',promptSchema);