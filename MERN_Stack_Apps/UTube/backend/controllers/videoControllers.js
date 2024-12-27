const mongoose = require('mongoose');
const Video    = require('../models/videoModel');

//Send all the videos to the client :
const getVideos = async (req,res) => {
    //Get all the videos from the database
    const all_videos = await Video.find({});
    //If you can't find them send a response with 404 error code
    if (!all_videos) {
        return res.status(404).json({error:"No Videos Found!"});
    };
    //If you found videos send them with response code 200
    res.status(200).json(all_videos);
}

//Send a Specific Video :
const getVideo = async (req,res) => {
    //De-Structure id from req parameters.
    const {id} = req.params;
    //See if the id is of proper format:
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"The ID is invalid!"})
    }
    //See if you can find the Video by ID
    const video = await Video.findById(id);
    //If not found send a response with error code 400
    if (!video){
        return res.status(400).json({error:"Video not found / Deleted!"})
    }
    //Or else send response code 200 with the body
    res.status(200).json(video);
}

//Letting an Authorized User Upload Video :
const uploadVideo = async (req,res) => {
    const path = req.file;
    try {
        user_id = req.user_id;
        const new_vid = await Video.create({video:path,user_id:user_id});
        res.status(200).json(new_vid);
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