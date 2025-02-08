const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const protectRoutes = async (req,res,next) => {
    try {
        const token = req.cookies.jwt;
        if (!token) {
            return res.status(401).json({error:"Unauthorized - No Token Provided!"});
        }
        const decoded = jwt.verify(token,process.env.SEC);
        if (!decoded) {
            return res.status(401).json({error:"Unauthorized - No Token Provided!"});
        }
        const user = await User.fineById(decoded._id).select("-password");
        if (!user) {
            return res.status(404).json({error : "User not found"});
        }
        req.user = user;
        next();
    } catch (error) {
        console.log("Error in protectRoutes middleware : ",error.message);
        res.status(500).json({error:"Internal Server Error :("});
    }
};

module.exports = protectRoutes;