const mongoose = require('mongoose');

const vidSchema = new mongoose.Schema({
    title       : String,
    description : String,
    url         : String,
    userId      : {type: mongoose.Schema.Types.ObjectId, ref:"User"}, //
    views       : {type: Number,default:0},
    likes       : {type: Number,default:0}
},{timestamps:true});

module.exports = mongoose.model('Video',vidSchema);