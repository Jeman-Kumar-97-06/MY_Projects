const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const {id}      = req.params;//The id of the person receiving the message
        const senderId  = req.userId;//The id of the person sending the message
    } catch (error) {
        console.log("Error in sendMessage Controller: ",error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}

module.exports = {sendMessage}