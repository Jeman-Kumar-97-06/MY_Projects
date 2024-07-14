const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const todoSch  = new Schema({
    title : {
        type : String,
        required : true
    },
    list : {
        type : Array,
        required : true
    }
},{timestamps:true});

module.exports = mongoose.model('Todolist',todoSch);