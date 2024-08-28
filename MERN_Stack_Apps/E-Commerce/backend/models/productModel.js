const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const productSchema = new Schema({
    prod_name  : {type:String,required:true},
    prod_desc  : {type:String,required:true},
    prod_price : {type:String,required:true},
    prod_image : {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('productsfinal',productSchema);