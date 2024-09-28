const User = require('../models/usersModel');
const jwt  = require('jsonwebtoken');

//A Function to generate token:
//To generate a JWT for a user, we need a unique thing about him that we can use to create one.
//Here we use the user's _id:
const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

//Login user:
const loginUser = async (req,res) => {
    //Destruture email and password from request body:
    const {usrname,email,password} = req.body;
    //Try to login. If error found return it:
    try {
        const user = await User.login(usrname,email,password);
        //create a token:
        const token = createToken(user._id);
        res.status(200).json({usrname,email,token});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//Signup user:
const signupUser = async (req,res) => {
    //Destructure email and password from the request body:
    const {usrname,email,password} = req.body;
    //Try to signup. If error found return it.
    try {
        const user = await User.signup(usrname,email,password);
        const token = createToken(user._id);
        res.status(200).json({usrname,email,token});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

module.exports = {loginUser,signupUser};