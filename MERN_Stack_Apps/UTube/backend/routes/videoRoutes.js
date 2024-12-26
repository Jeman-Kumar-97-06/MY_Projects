const express = require('express');
const {getVideos,
       getVideo,
       uploadVideo,
       deleteVideo
    }         = require('../controllers/videoControllers');


//If Authorized user sends a request the following 'requireAuth' will attach 'user_id' to the 'request'.
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.get('/',getVideos);

router.get("/:id",getVideo);

router.post('/',uploadVideo);

router.delete('/:id',deleteVideo);

module.exports = router;