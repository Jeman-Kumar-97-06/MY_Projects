const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const bookSchema = new Schema({
    title : {type:String,required:true},
    author: {type:String,required:true},
    price : {type:String,required:true},
    image : {type:String,required:true}
})

module.exports = mongoose.model('AllBook',bookSchema);