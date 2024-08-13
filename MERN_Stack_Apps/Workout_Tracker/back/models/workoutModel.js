const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const workoutSchema = new Schema({
    title : {type:String,required:true},
    reps  : {type:Number,required:true},
    load  : {type:Number,required:true}
},{timestamps:true});

//The collection in the database will be named "workoutfinals"
module.exports = mongoose.model('WorkoutFinal',workoutSchema);
