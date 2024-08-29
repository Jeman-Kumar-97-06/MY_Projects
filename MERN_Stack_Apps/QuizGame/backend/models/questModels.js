const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const questSchema = new Schema({
    question        : {type:String,required:true},
    correct_option  : {type:String,required:true},
    all_options     : {type:String,required:true},
    category        : {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('question',questSchema);