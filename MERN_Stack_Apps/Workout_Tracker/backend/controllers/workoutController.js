const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

const getWorkouts = async (req,res) => {
    const workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
};

const getWorkout = async (req,res) => {
    const {id} = req.params;
    //If ID is of In-Valid Format:
    if (!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:'The ID is of Invalid Format!'});
    }
    const workout = await Workout.findById(id);
    //If No Matching Workout is Found:
    if(!workout){
        return res.status(404).json({error:'No Workout with matching ID!'})
    }
    res.status(200).json(workout);
};

const createWorkout = async (req,res) => {
    const {title,load,reps} = req.body;
    try {
        const workout = await Workout.create({title,load,reps});
        res.status(200).json(workout);
    }catch(error){
        res.status(404).json({error:error.message});
    }
};

const deleteWorkout = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is of Invalid Format!"});
    }
    const workout = await Workout.findOneAndDelete({_id:id});
    if (!workout){
        return res.status(404).json({error:"No Workout with Matching ID!"})
    }
    res.status(200).json(workout);
};

const updateWorkout = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.staatus(404).json({error:"The ID is of Invalid Format!"});
    }
    const workout = await Workout.findOneAndUpdate({_id:id},{...req.body});
    if (!workout){
        return res.status(400).json({error:'No Workout with Matching ID!'})
    }
    res.status(200).json(workout);
};

module.exports = {getWorkouts,getWorkout,createWorkout,deleteWorkout,updateWorkout};