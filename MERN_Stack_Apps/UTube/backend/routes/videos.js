const express = require('express');
const multer  = require('multer');
const {v2 : cloudinary} = require('cloudinary');
const Video = require('../models/Video');

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SEC
});

const router = expresss.Router();
//Store in temporary memory before uploading to 'cloudinary'
const storage = multer.memoryStorage();

const upload = multer({storage});


//This function receives a POST request with userId , title of video and its description
router.post('/upload',upload.single('video'),async(req,res)=>{
    try {
        const {title, description, userId} = req.body;
        const result = await cloudinary.uploader.upload(req.file.buffer.toString('base64'),{
            resource_type:"video"
        });
        const video = new Video({title,description,url:result.secure_url, userId});
        await video.save();
        res.json({message:"Video Uploaded!",video});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
});

//This function receives a GET request for all videos :
router.get('/',async (req,res) => {
    //The following line fetches all videos with userId set to 'user' documents. Since second argument is 'username' only 'username' is selected.
    const videos = await Video.find().populate('userId','username');
    res.json(videos);
});


