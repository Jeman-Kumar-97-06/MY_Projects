const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const wallSchema = new Schema({
    walls : {type:Array,required:true},
    user_id : {type:String,required:true}
});

module.exports = mongoose.model('wallpaper',wallSchema);