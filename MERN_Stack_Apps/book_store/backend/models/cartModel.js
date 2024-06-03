const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const cartSchema = new Schema({
    book_id : {type:String,required:true},
    user_id : {type:String,required:true}
}) 

module.exports = mongoose.model('AllCartItem',cartSchema);