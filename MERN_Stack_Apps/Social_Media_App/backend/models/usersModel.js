const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcrypt');
const validator= require('validator');

const userSchema = new Schema({
    name       : {type:String,required:true},
    profilepic : {type:String,required:true},
    about      : {type:String,required:true},
    email      : {type:String,required:true},
    password   : {type:String,required:true}
});

userSchema.statics.signup = async function(name,profilepic,about,email,password) {
    if (!name || !profilepic || !about || !email || !password) {
        throw Error("All fields must be filled!")
    }
    if (!validator.isEmail(email)) {
        throw Error("Invalid Email!");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough!");
    }
    const emailExists = await this.findOne({email});
    if(emailExists) {
        throw Error("Email already in use!");
    }
    const userNameExists = await this.findOne({name});
    if(userNameExists) {
        throw Error("Username already in use!")
    }
    const salt = bcrypt.genSalt(10);
    const hash = bcrypt.hash(password,salt);
    const user = await this.create({name,profilepic,about,email,password:hash});
    return user;
}

userSchema.statics.login = async function(email,password) {
    if (!email || !password) {
        throw Error("All fields must be filled!");
    }
    const user = await this.findOne({email});
    if (!user) {
        throw Error("Wrong Email");
    }
    const match = await bcrypt.compare(password,user.password);
    if (!match) {
        throw Error("Incorrect Password!")
    }
    return user;
}

module.exports = mongoose.model('SocialUser',userSchema); 

