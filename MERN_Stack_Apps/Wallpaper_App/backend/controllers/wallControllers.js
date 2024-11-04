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

const uploadWalls = () => {
    
}

const updateWalls = () => {

}

module.exports = {getWalls,uploadWalls,updateWalls}