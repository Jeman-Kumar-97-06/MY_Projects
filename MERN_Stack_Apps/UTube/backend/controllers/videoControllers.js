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

