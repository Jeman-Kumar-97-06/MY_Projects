const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const noteSchema = new Schema({
    title     : {type:String,required:true},
    note_con  : {type:String,required:false}
},{timestamps:true});

module.exports = mongoose.model('notemern',noteSchema);
