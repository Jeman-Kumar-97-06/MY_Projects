const express = require('express');
const multer   = require('multer');
const router  = express.Router();

const {
    getWalls,
    getWall,
    uploadWalls,
}             = require('../controllers/wallControllers');

//Recieving Requests to save a uploaded wallpaper:
const storage = multer.diskStorage(
    {
        destination : function(req,file,cb) { return cb(null,'./uploads') },
        filename    : function(req,file,cb) { return cb(null,`${Date.now()}-${file.originalname}`) }
    }
)

const upload = multer({storage:storage});

// app.post('/api/upload_wall',upload.single('profile_pic'),(req,res)=>{
//     console.log(req.file.path);
//     return res.redirect('/');
// })

router.post('/',upload.single('wall_pic'),uploadWalls);

const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

router.get('/',getWalls);

router.get('/:id',getWall);



module.exports = router;