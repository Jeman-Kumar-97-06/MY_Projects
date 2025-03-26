const User = require('../models/userModel');
const jwt  = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

//Login Controller : 
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user  = await User.login(email,password);
        const token = createToken(user._id);
        return res.status(200).json({...user,token});
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
};

//Signup Controller :
const signupUser = async (req,res) => {
    const {name,email,password} = req.body;
    try {
        const user  = await User.signup(name,email,password);
        const token = createToken(user._id);
        return res.status(200).json({...user,token});
    } catch (error) {
        return res.status(404).json({error:error.message});
    }
};

module.exports = {loginUser,signupUser};