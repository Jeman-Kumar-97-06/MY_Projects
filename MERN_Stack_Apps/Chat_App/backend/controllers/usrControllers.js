const User = require('../models/User');
const jwt  = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:"2d"});
}

//Login User Controller Function : 
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.login(email,password);
        const token = createToken(user._id);
        res.status(200).json({user,token});
    } catch (error) {
        res.status(500).json({error:error.message});
    }
}

//Signup User Controlelr Function : 
const signupUser= async (req,res) => {
    const {name, email, password} = req.body;
    try {
        const user = await User.signup(name,email,password);
        const token = createToken(user._id);
        res.status(200).json({user,token});
    } catch (error){
        res.sttus(500).json({error:error.message});
    }
}

module.exports = {loginUser,signupUser};