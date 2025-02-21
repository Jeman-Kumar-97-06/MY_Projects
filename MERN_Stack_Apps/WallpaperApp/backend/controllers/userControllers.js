const mongoose = require('mongoose');
const jwt      = require('jsonwebtoken');
const User     = require('../models/userModel');

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SEC,{expiresIn:"3h"});
}

//Login User
const loginUser = async (req,res) => {
    const {username,password} = req.body;
    try {
        const user  = await User.login(username,password);
        const token = createToken(user._id);
        const name  = user.name;
        res.status(200).json({name,token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
};
//Signup User
const signupUser = async (req,res) => {
    const {fullname,username,password} = req.body;
    try {
        const user  = await User.signup(fullname,username,password);
        const token = createToken(user._id);
        const name  = user.name;
        res.status(200).json({name,token})
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

module.exports = {loginUser,signupUser};