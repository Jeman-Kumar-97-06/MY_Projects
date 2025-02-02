const jwt  = require('jsonwebtoken');
const User = require('../models/usersModel');

const requireAuth = async (req,res,next) => {
    //verify authentication:
    const {authorization} = req.headers;
    if (!authorization) {
        return res.status(401).json({error:"Authorization Token Required"});
    }
    //The authorization is sent in the form 'Bearer laskdj409809423143.ad3490'.
    //We are going to select token in the following line.
    const token = authorization.split(' ')[1];
    //since we used user._id to create jwt, we are going to decode it and extract from 'jwt' in the below line:
    try {
        const {_id} = jwt.verify(token,process.env.SECRET);
        req.user    = await User.findOne({_id}).select('_id')
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error:"Request not Authorized!"})
    }
}

module.exports = requireAuth