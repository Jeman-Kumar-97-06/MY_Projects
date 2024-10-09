const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');

const requireAuth = async (req,res,next) => {
    const {auth} = req.headers;
    if (!auth){
        return res.status(401).json({error:"Authorization Token Required!"});
    }
    const token = auth.split(' ')[1];
    try {
        const {_id} = jwt.verify(token,process.env.SEC);
        req.user    = await User.findOne({_id}).select("_id");
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error:"Request is not authorized"});
    }
}

module.exports = requireAuth;