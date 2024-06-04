//This file recieves HTTP request with an authorization token inside the request body.
//This is used to check if anyone is authorized, so that they can be allowed to go to all routes.
const User        = require('../models/userModel');
const jwt         = require('jsonwebtoken');
const requireAuth = async (req,res,next) => {
    const {authorization} = req.headers;
    if(!authorization)
        {
            return res.status(401).json({error:'Authorization token required!'});
        }
    const token = authorization.split(' ')[1];
    try
    {
        //The following line screws with the AuthToken by reverse engineering it to give a user_id
        const {_id} = jwt.verify(token,process.env.SECRET);
        //We use the _id to find the user matching. and add it to request object
        req.user    = await User.findOne({_id}).select('_id');
        next();
    }
    catch(error)
    {
        console.log(error);
        res.status(401).json({error:"Request is not authorized"});
    }
}
module.exports = requireAuth;