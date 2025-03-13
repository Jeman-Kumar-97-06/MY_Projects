const jwt  = require('jsonwebtoken');
const User = require('../models/userModel');

//A Middleware function that adds user._id to the req object:
const requireAuth = async (req,res,next) => {
    //We are going to receive the JWT from client via the req headers:
    const {authorization} = req.headers;
    if (!authorization) {
        return res.status(401).json({error:"Authorization token required :("});
    }
    const token = authorization.split(' ')[1];
    try {
        const {_id} = jwt.verify(token,process.env.SEC);
        req.user    = await User.findOne({_id}).select('_id');
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error:"Request is not Authorized!"});
    }
};

module.exports = requireAuth;