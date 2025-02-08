const User = require("../models/userModel");

const getUsersForSb = async (req,res) => {
    try {
        const loggedInUserId = req.user._id;
        const allUsers = await User.find({_id: {$ne : loggedInUserId}});
        res.status(200).json(allUsers);
    } catch (error) {
        console.error("Error in getUsersForSb: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
};

module.exports = getUsersForSb;