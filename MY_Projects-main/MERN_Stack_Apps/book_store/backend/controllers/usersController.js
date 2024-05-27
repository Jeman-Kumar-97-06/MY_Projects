//A list of controller functions that are to be executed ...
//...when requests are sent to the corresponding routes  ...
//...following '/book_s/user' are requested

const jwt      = require('jsonwebtoken');

const BookUser = require('../models/userModel');

//Function to create JWT
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:"3d"})
}

//'/login' route controller
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try
    {
        const user  = await User.login(email,password);
        const token = createToken(user._id);
        res.status(200).json(email,token);
    }
    catch(error)
    {
        res.status(400).json({error:error.message});
    }
}

//'/signup' route controller
const signupUser = async (req,res) => {
    const {email,password} = req.body;
    try
    {
        const user  = await BookUser.signup(email,password);
        const token = createToken(user._id)
        res.status(200).json({email,user});
    }
    catch(error)
    {
        res.status(400).json({error:error.message});
    }
}

module.exports = {loginUser,signupUser};