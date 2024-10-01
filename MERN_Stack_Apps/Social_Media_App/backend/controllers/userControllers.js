const User = require('../models/usersModel');
const jwt  = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

//Login user:
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.status(200).json({user,token});
    }
    catch (error) {
        res.status(400).json({error:error.message});
    }
}

//Signup user:
const signupUser = async (req,res) => {
    const {name,profilepic,about,email,password} = req.body;
    try {
        const user = await User.signup(name,profilepic,about,email,password);
        console.log("ran this")
        const token = createToken(user._id);
        res.status(200).json({user,token});
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

module.exports = {loginUser,signupUser};