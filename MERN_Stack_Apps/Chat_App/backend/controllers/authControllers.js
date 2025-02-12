const User = require('../models/userModel');
const jwt  = require('jsonwebtoken');

const createToken = (id,res) => {
    const token = jwt.sign({_id:id},process.env.SEC,{expiresIn:'3h'});
    res.cookie("jwt",token,{
        maxAge : 3 * 60 * 60 * 1000,
        httpOnly : true, //prevent xss attacks cross-site scripting attacks
        sameSite : "strict",//CSRF attacks.
        secure : process.env.NODE_ENV !== "development"
    })
};

const signupUser = async (req,res) => {
   
   const {fullName,username,password,confirmPassword,gender} = req.body;
   try {
        if (password !== confirmPassword) {
           return res.status(404).json({error:"Passwords don't match!"})
        }
        console.log("Ran cock sucker")
        const user = await User.signup(fullName, username, password, gender);
        console.log(user)
        const token = createToken(user._id,res);
        //If all goes well this is what browser will receive : 
        res.status(200).json({user,token});
   } catch (error) {
        res.status(404).json({error:error.message});
   }
}

const loginUser = async (req,res) => {
    const {username,password} = req.body;
    try {
        const user = await User.login(username,password);
        const token = createToken(user._id,res);
        //If all goes well this is waht browser will receive : 
        res.status(200).json({user,token})
    } catch (error) {
        res.status(404).json({error:error.message});
    }
};

const logoutUser = async (req,res) => {
    try {
        res.cookie("jwt","",{maxAge: 0});
        res.status(200).json({manage:"Logged out successfully!"});
    } catch (error) {
        console.log("Error ",error.message);
        res.status(500).json({error:"Internal Server Error!"});
    }
};


module.exports = {loginUser, logoutUser, signupUser}