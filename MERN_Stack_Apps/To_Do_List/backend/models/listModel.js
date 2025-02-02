const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const listSchema = new Schema({
    title  : {type:String,required:true},
    list   : {type:Array,required:false},
    dellis : {type:Array,required:false},
    user_id: {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('ToDoListTest',listSchema);
