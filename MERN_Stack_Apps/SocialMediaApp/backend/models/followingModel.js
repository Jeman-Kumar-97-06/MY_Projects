const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const followingSchema = new Schema({
    following_members : {type:Array,required:false},
    user_id           : {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('Following',followingSchema)