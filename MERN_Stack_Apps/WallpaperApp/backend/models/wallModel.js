const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const wallSchema = new Schema({
    wall : {type:String,required:true},
    user_id : {type:String,required:true}
});

module.exports = mongoose.model('wallpick',wallSchema);