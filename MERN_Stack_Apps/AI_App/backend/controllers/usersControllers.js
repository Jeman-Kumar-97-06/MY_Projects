const User = require('../models/usersModel');
const jwt  = require('jsonwebtoken')

const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.login(email,password);
        //create a token:
        const token = createToken(user._id);
        res.status(200).json({user,token});
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

const signupUser = async (req,res) => {
    const {name,email,password} = req.body;
    try{
        const user = await User.signup(name,email,password);
        //creating a JWT to send back to client after successful signup:
        const token = createToken(user._id);
        //if the above succeeds we send the object {email,<user_object>} as response with status code 200.
        res.status(200).json({user,token});
    } catch (error) {
        res.status(400).json({error:error.message}); 
    };
}

module.exports = {loginUser,signupUser}