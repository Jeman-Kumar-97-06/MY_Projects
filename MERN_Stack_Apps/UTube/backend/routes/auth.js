const express = require('express');
const bcrypt  = require('bcrypt');
const jwt     = require('jsonwebtoken');
const User    = require('../models/Users');

const router  = express.Router();

//User Signup : 
router.post("/signup",async(req,res)=>{
    //Destruture email & password :
    const {email,password} = req.body;
    try{
        const user = await User.signup(email,password);
        //create a token:
        const token = jwt.sign({userId:user._id},process.env.SEC,{expiredIn:"2h"});
        res.status(200).json({email,token})
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
})

//User Login : 
router.post('/login',async (req,res)=> {
    //Destructure email and password : 
    const {email,password} = req.body;
    try {
        const user = await User.login({email,password});
        const token = jwt.sign({userId:user._id},process.env.SEC,{expiredIn:"2h"});
        res.status(200).json({email,token});
    }
    catch (error) {
        res.status(400).json({error:error.message});
    }
})

module.exports = router;