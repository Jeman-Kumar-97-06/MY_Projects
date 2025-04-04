const User           = require('../models/userModel');
const jwt            = require('jsonwebtoken');
const {OAuth2Client} = require('google-auth-library');


const createToken = (id) => {
    return jwt.sign({_id:id},process.env.SEC,{expiresIn:'3d'});
}

const client = new OAuth2Client(process.env.GOOGLECLIENTID);

//Login Users with Google : 
const googleLogin = async (req,res) => {
    const {credential} = req.body;
    
    try {
        const ticket = await client.verifyIdToken({
            idToken:credential,
            audience:process.env.GOOGLECLIENTID
        })
        const payload = ticket.getPayload();
        const {email,name,sub:googleId} = payload;
        //Check if user exists in mongodb:
        let user = await User.findOne({email});
        if (!user) {
            user = await User.create({
                name,email,password:''
            })
        }
        //Create a JWT:
        const token = createToken(user._id) 
        return res.status(200).json({...user,token});
    } catch (err) {
        console.log(err);
        res.status(400).json({message:"Google login failed!"})
    }
}

//Login Controller : 
const loginUser = async (req,res) => {
    const {name,password} = req.body;
    try {
        const user  = await User.login(name,password);
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

module.exports = {googleLogin,loginUser,signupUser};