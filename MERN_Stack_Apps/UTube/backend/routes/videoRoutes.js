const express = require('express');
const {getVideos,
       getVideo,
       uploadVideo,
       deleteVideo
    }         = require('../controllers/videoControllers');

const requireAuth = require('../middleware/requireAuth');