const Workout  = require('../models/workoutModel');
const mongoose = require('mongoose') ;

//get all workouts:
const getWorkouts = async (req,res) => {
    const all_workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(all_workouts);
}

//get a single workout :
const getWorkout = async (req,res) => {
    const {id}    = req.params;
    const workout = await Workout.findById(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    //The code lines from 18 to 22 will be enough. But if you don't check the ID format as shown above, not only will the code ...
    //give error, but it will crash too.
    if(!workout){
        //The reason we are using 'return' in the following state is bcoz the 'res.status' won't end the code.
        return res.status(404).json({error:'No match found with the specified ID'});
    }
    res.status(200).json(workout);
}

//create a new workout :
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body;
    //Try adding a new workout to the DB
    try{
        const new_workout = await Workout.create({title,load,reps});
        res.status(200).json(new_workout);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

//Delete a workout :
const deleteWorkout = async (req,res) => {
    const {id} = req.params;
    //Check ID validity to prevent api crash:
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const workout_to_be_deleted = await Workout.findOneAndDelete({_id:id});
    if (!workout_to_be_deleted){
        return res.status(404).json({error:"No match found with the specified ID"})
    };
    res.status(200).json(workout_to_be_deleted);
}

//Update a workout :
const updateWorkout = async (req,res) => {
    const {id} = req.params;
    //Check ID validity to prevent API crash:
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const workout_to_update = await Workout.findOneAndUpdate({_id:id},{...req.body});
    if (!workout_to_update){
        return res.status(404).json({error:"No match found with the specified ID"});
    };
    res.status(200).json(workout_to_update);
}

module.exports = {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout};