//LOGIN USER :
const loginUser = async (req,res) => {
    res.json({mssg:"LOGIN USER"});
}

//SIGNUP USER :
const signupUser = async (req,res) => {
    res.json({mssg:"SIGNUP USER"});
}

module.exports = {loginUser,signupUser};