const express = require('express');
const multer   = require('multer');
const router  = express.Router();

const {
    getWalls,
    getWall,
    uploadWalls,
    downloadWalls,
}             = require('../controllers/wallControllers');

//Storage Config:
const storage = multer.diskStorage(
    {
        destination : function(req,file,cb) { cb(null,'./uploads') },
        filename    : function(req,file,cb) { cb(null,`${Date.now()}-${file.originalname}`) }
    }
)

//Filters only jpeg or jpg images:
const fileFilter = (req,file,cb) => {
    if (file.mimetype==='image/jpeg' || file.mimetype === 'image/jpg') {
        cb(null,true);
    } else {
        cb(new Error("Only JPEG images are allowed!"),false);
    }
}

//File Upload Config :
const upload = multer({storage:storage,fileFilter:fileFilter});

const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

router.get('/',getWalls);

router.get('/:id',getWall);

//Saves to 'upload' folder first then saves the file path to mongodb :
router.post('/',(req, res, next) => {
    console.log("Received request for file upload.");
    
    upload.single('wall_pic')(req, res, (err) => {
        if (err) {
            console.error("Multer error:", err);
            return res.status(400).json({ error: err.message });
        }
        
        console.log("File uploaded:", req.file); // Check file data
        console.log("Request body:", req.body); // Check other request data
        
        next();
    });
},uploadWalls);

router.get('/download/:id',downloadWalls);

module.exports = router;