const express = require('express');
const bcrypt  = require('bcrypt');
const jwt     = require('jsonwebtoken');
const User    = require('../models/Users');

const router  = express.Router();

//User Signup : 
router.post("/signup",async(req,res)=>{
    //Destructure username, email and password from 'req.body'
    const {username, email, password} = req.body;
    //Create a hashedPassword from password and a salt of length 10.
    const hashedPassword  = await bcrypt.hash(password,10);
    //Create a user from the username,email and hashed password as the password
    const user = new User({username,email,password:hashedPassword});
    //Save it to mongoDB db.
    await user.save();
    //Return a message 'User created!' with 201 http code.
    res.status(201).json({message:"User created!"});
})

//User Login : 
router.post('/login',async (req,res)=> {
    //Destructure username, password from 'req.body'
    const {email,password} = req.body;
    //Find user with the given email
    const user = await User.findOne({email});
    //What to do if the user is not found or the given password is wrong
    if (!user || !(await bcrypt.compare(password,user.password))) {
        return res.status(401).json({message:"Invalid Credentials"});
    }
    //create a jwt token to send back to the client : 
    const token = jwt.sign({userId:user._id},process.env.SEC,{expiresIn:"2d"});
    //send a response object with JWT TOKEN and THE USER'S ID : 
    res.json({token,userId:user._id});
})

module.exports = router;