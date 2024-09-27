const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const followersSchema = new Schema({
    followers : {type:Array,required:false},
    user_id   : {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('Follower',followersSchema)