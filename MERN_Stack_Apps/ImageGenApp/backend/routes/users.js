const express         = require('express');
const router          = express.Router();
const multer          = require('multer');
const {v2:cloudinary} = require('cloudinary');
const fs              = require('fs');
const path            = require('path');
const {
    signupUser,loginUser
}                     = require('../controllers/userControllers');


//Configuring temporary uploads folder:
const uploadDir       = path.join(__dirname,'uploads');
//Create a 'uploads' folder if there isn't one:
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
}

//Cloudinary Config : 
cloudinary.config({
    cloud_name:'dt0zcc0ec',
    api_key:'363287392839592',
    api_secret:process.env.API_SEC
})

//Storage Config : 
const storage = multer.diskStorage(
    {
        destination : function(req,file,cb) {cb(null,uploadDir)},
        filename    : function(req,file,cb) {cb(null,`${file.originalname}-${Date.now()}`)}
    }
)

//File Upload Config :
const upload = multer({storage:storage});

//All user routes:
router.post('/login',loginUser);

router.post('/signup',(req, res, next) => {
    console.log("Received request for file upload.");
    
    upload.single('pfPic')(req, res, (err) => {
        if (err) {
            console.error("Multer error:", err);
            return res.status(400).json({ error: err.message });
        }
        console.log("File uploaded:", req.file); // Check file data
        console.log("Request body:", req.body); // Check other request data
        next();
    });
},async (req,res,next)=>{
    try {
        if (!req.file) {
            return res.status(400).json({error:"No file uploaded"});
        }
        //Upload image to cloudinary:
        const uploadResult = await cloudinary.uploader.upload(req.file.path);
        //Remove the file as soon as it is uploaded to cloudinary:
        fs.unlinkSync(req.file.path);
        //attach profile pic cloudinary url to req object which the 'signupUser' function can access next:
        req.pfPic = uploadResult.secure_url;
    } catch (error) {
        res.status(404).json({error:`${error.message}`});
    }
    next();
},signupUser);

module.exports = router;