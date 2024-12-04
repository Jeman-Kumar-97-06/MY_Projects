const express = require('express');
const multer   = require('multer');
const router  = express.Router();

const {
    getWalls,
    getWall,
    uploadWalls,
    downloadWalls,
    getMyWalls
}             = require('../controllers/wallControllers');

//Recieving Requests to save a uploaded wallpaper:
const storage = multer.diskStorage(
    {
        destination : function(req,file,cb) { return cb(null,'./uploads') },
        filename    : function(req,file,cb) { return cb(null,`${Date.now()}-${file.originalname}`) }
    }
)

const upload = multer({storage:storage});

const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);


router.get('/',getWalls);

router.get('/:id',getWall);

router.post('/',upload.single('wall_pic'),uploadWalls);

router.get('/download/:id',downloadWalls);

module.exports = router;