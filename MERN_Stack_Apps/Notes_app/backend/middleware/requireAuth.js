const jwt = require('jsonwebtoken');
const User = require('../models/usersModel');
const requireAuth = async (req,res,next) =>  {
    //Verify authentication:
    const {authorization} = req.headers;
    
    if (!authorization) {
        return res.status(401).json({error:'Authorization token required'});
    }
    //We are going to attach autorization as 'Bearer alsdkfaTHISISTOKENYO.asdlfkj' to the req we send from clientside:
    //The second part is the token.
    const token = authorization.split(' ')[1];
    try {
        const {_id} = jwt.verify(token,process.env.SEC);
        //Attach the new 'user' key with the following value [user's id] to the 'req' object.
        req.user    = await User.findOne({_id}).select('_id');
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error:'Request is not authorized!'});
    }
};

module.exports = requireAuth;