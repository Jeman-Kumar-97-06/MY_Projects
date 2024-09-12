const User = require('../models/usersModel');
//Login User
const loginUser = async (req,res) => {
    res.json({mssg:'Login User!'})
}

//Signup User
const signupUser = async (req,res) => {
    res.json({mssg:"Signup User!"})
}

module.exports = {loginUser,signupUser};