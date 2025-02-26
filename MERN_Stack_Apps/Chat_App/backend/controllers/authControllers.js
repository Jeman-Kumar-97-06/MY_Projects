const User = require('../models/userModel');
const jwt  = require('jsonwebtoken');
const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:"3d"});
}

//Login Controller : 
const loginUser = async () => {
    const {username,password} = req.body;
    try {
        const user = await User.login(username,password);
        const token = createToken(user._id);
        res.status(200).json({...user,token});
    } catch (err) {
        res.status(400).json({error:err.message})
    }
}
//signup controller : 
const signupUser = async () => {
    const {username,fullname,password,confirmPassword,gender} = req.body;
    try {
        if (password !== confirmPassword) {
            return res.status(400).json({error:"Passwords don't match!"})
        }
        const user = await User.signup(username,fullname,password,gender);
        const token = createToken(user._id);
        res.status(200).json({...user,token});
    } catch (err) {
        res.status(400).json({error:err.message});
    }
}

module.exports = {loginUser,signupUser};