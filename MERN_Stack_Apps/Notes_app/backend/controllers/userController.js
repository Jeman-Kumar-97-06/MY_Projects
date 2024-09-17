const User = require('../models/usersModel');
const jwt  = require('jsonwebtoken');

//Function to generate token.
//To generate a JWT for a user, we need a part of the user's data that can be traced back to him.
//Here we use user's ID
const createToken = (id) => {

}

//Login User:
const loginUser = async (req,res) => {
    res.json({mssg:'login user'});
}

//Signup User:
const signupUser = async (req,res) => {
    //De-Structure the req body
    const {email,password} = req.body;
    try{
        const user = await User.signup(email,password);
        //if the above succeeds we send the object {email,<user_object>} as response with status code 200.
        res.status(200).json({email,user});
    } catch (error) {
        res.status(400).json({error:error.message}); 
    };
}

module.exports = {loginUser,signupUser};