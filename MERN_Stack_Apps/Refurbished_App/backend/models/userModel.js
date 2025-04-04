const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    name : {type:String,required:true},
    email : {type:String,required:true},
    password : {type:String,required:false}
});

userSchema.statics.signup = async function(name,email,password) {
    //See if the email is valid
    if (!validator.isEmail(email)){
        throw Error("Invalid Email!")
    }
    //See if the password is strong
    if (!validator.isStrongPassword(password)){
        throw Error("Password not strong enough!")
    }
    //See if the email already exists
    const exists = await this.findOne({email});
    if (exists) {
        throw Error("Email already exits");
    }
    //create as salt of length 10
    const salt = await bcrypt.genSalt(10);
    //Add that salt to password to create a hash
    const hash = await bcrypt.hash(password,salt);
    //Create new user
    const user = await this.create({name,email,password:hash});
    return user;
}

userSchema.statics.login = async function(name,password) {
    //Find the user with the given name:
    const user = await this.findOne({name:name});
    //See if that email exists
    if (!user) {
        throw Error("Incorrect Username");
    }
    //Match received password and existing password
    const match = await bcrypt.compare(password,user.password);
    if (!match) {
        throw Error("Incorrect Password!");
    }
    return user;
}

module.exports = mongoose.model('refurbuser',userSchema);