const mongoose = require('mongoose');
const Wall     = require('../models/wallModel');
const workoutModel = require('../../../Workout_Tracker/backend/models/workoutModel');

const getWalls = async (req,res) => {
    const all_walls = await Wall.find({});
    if (!all_walls){
        return res.status(404).json({error:"No Wallpapers Found!"})
    };
    res.status(200).json(all_walls);
}

const getWall = async (req,res) => {
    const {id} = req.params;

    //See if the 'id' is of proper format:
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID isn't valid!"})
    }

    const wallpaper = await Wall.findById(id);

    //If No Matching Wallpaper is found:
    if (!wallpaper){
        return res.status(404).json({error:"No Wallpaper found with the given ID!"})
    };

    res.status(200).json(wallpaper)
}

const uploadWalls = async (req,res) => {
    const {wall} = req.body;
    try{
        const user_id  = req.user._id;
        const new_wall = await Wall.create({wall:wall,user_id:user_id});
        res.status(200).json(new_wall);
    } catch (err) {
        res.status(404).json({error:err.message})
    }
}


module.exports = {getWalls,getWall,uploadWalls};