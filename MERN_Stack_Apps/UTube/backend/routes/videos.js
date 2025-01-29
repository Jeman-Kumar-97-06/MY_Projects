const express = require('express');
const multer  = require('multer');
const {v2:cloudinary} = require('cloudinary');
const Video = require('../models/Video');

cloudinary.config({
    cloud_name:
    api_key:
    api_secret:
});

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({storage});

//Upload Video:
router.post("/upload", upload.single("video"), async (req, res) => {
    try {
        const { title, description, userId } = req.body;
        const result = await cloudinary.uploader.upload(req.file.buffer.toString("base64"), {
            resource_type: "video",
        });

        const video = new Video({ title, description, url: result.secure_url, userId });
        await video.save();

        res.json({ message: "Video uploaded!", video });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});