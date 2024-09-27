const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const postSchema = new Schema({
    post_body    : {type:String,required:false},
    post_image   : {type:String,required:true},
    post_likes   : {type:Number,required:true},
    post_usr     : {type:String,required:true},
    post_usr_img : {type:String,required:true}
},{timestamps:true})

module.exports = mongoose.model('SocialMediaPost',postSchema);