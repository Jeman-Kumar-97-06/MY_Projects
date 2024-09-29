const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const postSchema = new Schema({
    body:{type:String,required:true},
    img :{type:String,required:false},
    usr :{type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('SocialPost',postSchema);