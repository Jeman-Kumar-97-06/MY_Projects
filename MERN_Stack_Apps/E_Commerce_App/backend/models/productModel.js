const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const prodSchema = new Schema({
    prod_name : {type:String,required:true},
    prod_img  : {type:String,required:true},
    prod_pri  : {type:Number,required:true}
},{timestamps:true});

module.exports = mongoose.model('EcomProd',prodSchema);
