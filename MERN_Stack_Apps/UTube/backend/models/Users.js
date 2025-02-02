const mongoose  = require('mongoose');
const validator = require('validator');
const bcrypt    = require('bcrypt');
const usrSchema = new mongoose.Schema({
    email    : String,
    password : String
});


usrSchema.statics.signup = async function (email,password) {
    //See if email or password is left blank:
    if (!email || !password){
        throw Error('All fields must be filled!')
    }
    //Validate Email : 
    if (!validator.isEmail(email)) {
        throw Error("Invalid Email!")
    }

    //Validate Password : 
    if (!validator.isStrongPassword(password)) {
        throw Error("Password Not Strong Enough!")
    }

    const exists = await this.findOne({email});

    if (exists) {
        throw Error("User already exists!")
    };

    //Generate salt of length 10
    const salt = await bcrypt.genSalt(10);
    //Creating a hash of the password
    const hash = await bcrypt.hash(password,salt);

    const user = await this.create({email,password:hash});
    return user;
}

usrSchema.statics.login = async function (email,password) {
    //See if email and password are filled : 
    if (!email || !password) {
        throw Error("All fields must be filled!")
    }
    //New we find the user with the give email :
    const user  = await this.findOne({email});
    if (!user) {
        throw Error("No user with the specified email");
    }

    const match = await bcrypt.compare(password,user.password)
    if (!match) {
        throw Error("Incorrect Password!")
    }
    return user;
}

module.exports = mongoose.model('User',usrSchema);