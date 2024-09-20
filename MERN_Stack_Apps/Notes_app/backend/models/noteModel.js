const mong   = require('mongoose');
const Schema = mong.Schema;

const noteSchema = new Schema({
    title:{type:String,required:true},
    body :{type:String,required:false},
    user_id : {type:String,required:true}
},{timestamps:true});

module.exports = mong.model('NoteFinal',noteSchema);