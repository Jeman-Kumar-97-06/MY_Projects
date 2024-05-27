const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;
const cartSchema = new Schema(
    {
        cItem  : {type:String,required:true},
        userID : {type:String,required:true}
    }
)

module.exports = mongoose.model("CartItem",cartSchema);