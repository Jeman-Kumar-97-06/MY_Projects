const User            = require('../models/userModel');
const jwt             = require('jsonwebtoken');

//a seperate function that takes an id and creates a token:
const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:"3d"});
};

//Login user :
const loginUser = async (req,res) => {
    const {usrn,pwd} = req.body;
    try {
        const user  = await User.login(usrn,pwd);
        const token = createToken(user._id);
        res.status(200).json({user,token});
     } catch (error) {
        res.status(404).json({error:error.message});
     }
}

//Signup user : 
const signupUser = async (req,res) => {
    const {fulln,usrn,pwd} = req.body;
    const pfPic            = req.pfPic;
    try {
        const user  = await User.signup(fulln,usrn,pwd,pfPic);
        const token = createToken(user._id);
        res.status(200).json({user,token});
    } catch (error) {
        res.status(404).json({error:error.message});
    }
}

module.exports = {loginUser,signupUser};