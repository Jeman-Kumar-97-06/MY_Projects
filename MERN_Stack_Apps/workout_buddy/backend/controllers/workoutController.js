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

//function to UPDATE a workout :

module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout
}