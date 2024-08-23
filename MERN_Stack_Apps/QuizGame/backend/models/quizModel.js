const mongoose   = require('mongoose');
const Schema     = mongoose.Schema;

const queslistSchema = new Schema({
    queslist      : {type:Array,required:true},
    score         : {type:Number,required:false}
},{timestamps:true});

module.exports = mongoose.model('quesList',queslistSchema);