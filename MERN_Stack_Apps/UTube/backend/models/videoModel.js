const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const videoSchema = new Schema({
    video : {type:String,required:true},
    user_id : {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model("CMSVideo",videoSchema);