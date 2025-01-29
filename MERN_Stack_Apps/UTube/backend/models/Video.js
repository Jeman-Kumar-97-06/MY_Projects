const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
    title : String,
    description : String,
    url : String,
    userId : {type : mongoose.Schema.Types.ObjectId,ref:"User"}
})