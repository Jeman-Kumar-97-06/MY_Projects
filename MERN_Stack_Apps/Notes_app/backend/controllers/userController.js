const User = require('../models/usersModel');
const jwt  = require('jsonwebtoken');

//Function to generate token.
//To generate a JWT for a user, we need a part of the user's data that can be traced back to him.
//Here we use user's ID
const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

//Login User:
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.login(email,password);
        //create a token:
        const token = createToken(user._id);
        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

//Signup User:
const signupUser = async (req,res) => {
    //De-Structure the req body
    const {email,password} = req.body;
    try{
        const user = await User.signup(email,password);
        //creating a JWT to send back to client after successful signup:
        const token = createToken(user._id);
        //if the above succeeds we send the object {email,<user_object>} as response with status code 200.
        res.status(200).json({email,token});
    } catch (error) {
        res.status(400).json({error:error.message}); 
    };
}

module.exports = {loginUser,signupUser};