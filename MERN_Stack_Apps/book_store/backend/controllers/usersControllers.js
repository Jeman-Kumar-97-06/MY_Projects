const BookUser = require('../models/userModel');
const jwt      = require('jsonwebtoken');

//Creating Token :-
const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:'3d'});
}

//LOGIN USER : controller that says what the server should do when we get '/login' POST request.
const loginUser = async (req,res) => {
    const {email,password} = req.body;
    try{
        //we defined 'login' static method in 'userModel.js'
        const user     = await BookUser.login(email,password);
        const useridyo = user._id; 
        const token    = createToken(user._id);
        res.status(200).json({email,useridyo,token});
    }
    catch(error)
    {
        res.status(400).json({error:error.message});
    }
}

//SIGNUP USER : controller that says what the server should do when we get a '/signup' POST request.
const signupUser = async (req,res) => {
    const {email,password}  = req.body;
    try{
        //we defined 'signup' static method in 'userModel.js'
        const user     = await BookUser.signup(email,password);
        const useridyo = user._id;
        const token    = createToken(user._id);
        res.status(200).json({email,useridyo,token});
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

module.exports = {loginUser,signupUser};