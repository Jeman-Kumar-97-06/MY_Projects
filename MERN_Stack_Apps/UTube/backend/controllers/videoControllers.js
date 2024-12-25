const mongoose = require('mongoose');
const Video    = require('../models/videoModel');

//Send all the videos to the client :
const getVideos = async (req,res) => {
    const all_videos = await Video.find({});
    if (!all_videos) {
        return res.status(404).json({error:"No Videos Found!"});
    };
    res.status(200).json(all_videos);
}

//Send a Specific Video :
const getVideo = async (req,res) => {
    const {id} = req.params;
    //See if the id is of proper format:
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"The ID is invalid!"})
    }
    const video = await Video.findById(id);
    if (!video){
        return res.status(400)
    }
}

//Letting an Authorized User Upload Video :
const uploadVideo = async (req,res) => {
    const path = req.file;
    try {
        user_id = req.user_id;
        const new_vid = await Video.create({video:path,user_id:user_id});
        res.status(200).json({new_vid});
    }
    catch (err) {
        res.status(404).json({error:err.message});
    }
};

//Letting an Autorized User Delete a Video :
const deleteVideo = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const vid_to_del = await Video.findOneAndDelete({_id:id});
    if(!vid_to_del) {
        return res.status(404).json({error:"No Video found with the matching ID!"})        
    } 
    res.status(200).json(vid_to_del);
}

module.exports = {getVideos,getVideo,uploadVideo,deleteVideo};