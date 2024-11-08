require('dotenv').config();
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const multer   = require('multer');

const wallRts  = require('./routes/walls');
const userRts  = require('./routes/users');
const { db } = require('./models/wallModel');

const app      = express();

app.use(cors());
app.use(express.json());

//Using wallRts at '/api/walls'
app.use('/api/walls',wallRts);

//Recieving Requests to save a uploaded wallpaper:
const storage = multer.diskStorage(
    {
        destination : function(req,file,cb) { return cb(null,'./uploads') },
        filename    : function(req,file,cb) { return cb(null,`${Date.now()}-${file.originalname}`) }
    }
)

const upload = multer({storage:storage});

app.post('/api/upload_wall',upload.single('profile_pic'),(req,res)=>{
    console.log(req.file.path);
    return res.redirect('/');
})

//Using userRts at '/api/users'
app.use('/api/users',userRts);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("Connected to DB and listening to requests")})
}).catch((error)=>{console.log(error)});