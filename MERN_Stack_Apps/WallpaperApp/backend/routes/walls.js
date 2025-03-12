const express  = require('express');
const {v2:cld} = require('cloudinary');
const multer   = require('multer');
const router   = express.Router();
const fs       = require('fs');
const path     = require('path');

const uploadDir = path.join(__dirname,'uploads')

const {
    getWalls,
    getWall,
    uploadWalls,
    downloadWalls,
}             = require('../controllers/wallControllers');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

//Cloudinary Config : 
cld.config({
    cloud_name:'dt0zcc0ec',
    api_key:'363287392839592',
    api_secret:process.env.API_SEC
})

//Storage Config:
const storage = multer.diskStorage(
    {
        destination : function(req,file,cb) { cb(null,uploadDir) },
        filename    : function(req,file,cb) { cb(null,`${Date.now()}-${file.originalname}`) }
    }
)

// //Filters only jpeg or jpg images:
// const fileFilter = (req,file,cb) => {
//     if (file.mimetype==='image/jpeg' || file.mimetype === 'image/jpg') {
//         cb(null,true);
//     } else {
//         cb(new Error("Only JPEG images are allowed!"),false);
//     }
// }

//File Upload Config :
const upload = multer({storage:storage});

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
},async (req,res)=> {
    try {
        if (!req.file) {
            return res.status(400).json({error:'No file uploaded'});
        }
        console.log("File received:",req.file.path);
        //Uploading to cloudinary : 
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        //Remove the file as soon as it is uploaded to cloudinary:
        fs.unlinkSync(req.file.path);
        //Send the Image URL to client : 
        res.json({imageURL:uploadResult.secure_url});
    } catch (error) {
        console.log("upload error: ",error);
        res.status(500).json({error:"Upload failed!"})
    }
});

router.get('/download/:id',downloadWalls);

module.exports = router;