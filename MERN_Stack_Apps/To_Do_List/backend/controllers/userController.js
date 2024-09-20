const User = require('../models/userModel');
const jwt  = require('jsonwebtoken');

//Function to generate a JWT:
//To Generate a JWT we need a unique piece of data that belongs to the user as a reference.
//Here we are going to use his/her _id:
const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

//Login User :
const loginUser = async (req,res) => {
    //Destructure email and Password from req body.
    const {email,password} = req.body;
    
    try {
        const user  = await User.login(email,password);
        //create a token:
        const token = createToken(user._id);
        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
};

//Signup User:
const signupUser = async (req,res) => {
    //Destructure email and password:
    const {email,password} = req.body;
    try {
        const user = await User.signup(email,password);
        //create a token:
        const token = createToken(user._id);
        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}