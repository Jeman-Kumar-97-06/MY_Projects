const express = require('express');
const bcrypt  = require('bcrypt');
const jwt     = require('jsonwebtoken');
const User    = require('../models/Users');

const router  = express.Router();

//User Signup : 
router.post('/signup',async(req,res) => {
    const {username,email,password} = req.body;
    const hashedPassword = await bcrypt.hash(password,10);
    const user = new User({username,email,password:hashedPassword});
    await User.save();
    res.status(201).json({message:"User Created!"});
})

//User Login :
router.post('/login',async (req,res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (!user || !(await bcrypt.compare(password,user.password))) {
        return res.status(401).json({message:"Invalid Credentials!"})
    }
    const token = jwt.sign({userId:user._id},process.env.SEC_KEY,{expiresIn:"2h"});
    res.json({token,userId:user._id});
});

module.exports = router;