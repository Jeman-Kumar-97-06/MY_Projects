const mongoose = require('monoose');
const Schema   = mongoose.Schema;

const wallpaperSchema = new Schema({
    path : {type:String,required:true},
    user_id : {type:String,required:true}
});

module.exports = mongoose.model('wallpaper',wallpaperSchema);