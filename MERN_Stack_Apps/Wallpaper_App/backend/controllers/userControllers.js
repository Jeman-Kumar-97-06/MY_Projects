const mongoose    = require('mongoose');
const jwt         = require('jsonwebtoken');

const User        = require('../models/userModel');

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SEC,{expiresIn:"3d"});
}

//Login User:
const loginUser = async (req,res) => {
    //Destructure email and password from request body
    const {email,password} = req.body;
    //Try Logging in
    try {
        const user  = await User.login(email,password);
        const token = createToken(user._id);
        const name  = user.name;
        res.status(200).json({name,email,token});
    }
    catch(error){
        res.status(400).json({error:error.message})
    }
};

//Signup User:
const signupUser = async (req,res) => {
    //Destructure name,email and password from request body
    const {name,email,password} = req.body;
    //Try Signing up the new user and if successfull log the user in
    try {
        const user  = await User.signup(name,email,password);
        const token = createToken(user._id);
        res.status(200).json({name,email,token});
    }
    catch (error) {
        res.status(400).json({error:error.message})
    }
};

module.exports = {loginUser,signupUser};