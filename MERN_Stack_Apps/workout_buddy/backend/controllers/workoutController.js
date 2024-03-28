const Workout  = require('../models/workoutModel')
const mongoose = require('mongoose'); 

//function to GET all workouts :
const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
}

//function to GET a single workout :
const getWorkout   = async (req,res) => {
    const {id} = req.params;
    //Seeing if the id is valid and follows the rules given by mongodb [rules for forming the id]
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such workout!"})
    }
    const workout = await Workout.findById(id);
    if(!workout){
        return res.status(404).json({error:"No such workout"});
    }
    res.status(200).json(workout);
}

//function to POST a new workout :
const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body;
    try {
        const workout = await Workout.create({title,load,reps});
        res.status(200).json(workout);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}


//function to DELETE a workout :
const deleteWorkout = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No SUch Workout!"})
    }
    const workout = await Workout.findOneAndDelete({_id:id});
    if(!workout){
        return res.status(400).json({error:"No Such Workout!"});
    }
    res.status(200).json(workout);
}

//function to UPDATE a workout :
const updateWorkout = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"No such Workout!"});
    };
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body});
    if(!workout){
        return res.status(400).json({error:"No Such Workout!"})
    };
    res.status(200).json(workout);
}

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}