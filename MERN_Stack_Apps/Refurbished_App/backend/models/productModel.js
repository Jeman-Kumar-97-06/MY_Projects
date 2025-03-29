const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const productSchema = new Schema({
    name   : {type:String,required:true},
    image  : {type:String,required:true},
    price  : {type:String,required:true},
    rating : {type:String,required:true},
    battery : {type:String, required:true},
    design : {type:String,required:true},
    display : {type:String,required:true}
});

module.exports = mongoose.model('Refurbished_prod',productSchema);