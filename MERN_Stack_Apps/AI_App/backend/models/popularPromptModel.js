const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const popularPromptsSchema = new Schema({
    prompts : {type:String,required:false},
    user_id : {type:String,required:true}
},{timestamps:true});

module.exports = mongoose.model('aiprompt',popularPromptsSchema);