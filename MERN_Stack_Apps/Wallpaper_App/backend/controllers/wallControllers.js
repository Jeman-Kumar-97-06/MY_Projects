const mongoose = require('mongoose');
const Wall     = require('../models/wallModel');

// Get User Specific Walls :--
const getMyWalls = async (req,res) => {
    const user_id = req.user._id;
    const walls   = await Wall.find({user_id}).sort({createdAt:-1});
    res.status(200).json(walls);
}

//Send all the wallpapers to the client
const getWalls = async (req,res) => {
    const all_walls = await Wall.find({});
    if (!all_walls){
        return res.status(404).json({error:"No Wallpapers Found!"})
    };
    res.status(200).json(all_walls);
}

//Send a specified wallpaper
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

//Letting an Authenticated User Upload wallpaper
const uploadWalls = async (req,res) => {
    const {path} = req.file;
    try{
        user_id = req.user._id;
        const new_wall = await Wall.create({wall:path,user_id:user_id});
        res.status(200).json(new_wall);
    } catch (err) {
        res.status(404).json({error:err.message})
    }
}

// Letting an Authenticated User Download Wallpaper
const downloadWalls = async (req,res) => {
    const {id} = req.params;
     //See if the 'id' is of proper format:
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID isn't valid!"})
    }

    const wallpaper = await Wall.findById(id);
    //Sending image response to the client: 
    res.download(wallpaper.wall, wallpaper.wall, (error) => {
		if (error) {
            console.log(error)
			res.status(500).json({error:error.message})
		}
	})
}

module.exports = {getWalls,getWall,uploadWalls,downloadWalls,getMyWalls};