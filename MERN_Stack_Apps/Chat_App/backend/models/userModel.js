const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    fullName : {type:String, required:true},
    username : {type:String, required:true},
    password : {type:String, required:true, minlength:6},
    gender   : {type:String, required:true, enum:["male","female"]},
    profilePic : {type:String, default:""}
},{timestamps:true});

userSchema.statics.signup = async function (fullName,username,password,gender) {
    console.log("ran this mother")
    if (!fullName || !username || !password || !gender) {
        throw Error("All fields must be filled!");
    }
    
    if (!validator.isStrongPassword(password)){
        console.log("Found you bitch",password)
        throw Error("Password ain't strong enough");
    }
    const exists = await this.findOne({username});
    if (exists) {
        throw Error("Username already exists:(");
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    
    const boyPpic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPpic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    const user = await this.create({fullName,username,password:hash,gender,profilePic:gender=='male' ? boyPpic : girlPpic });
    return user;
};

userSchema.statics.login = async function (username,password) {
    if (!username || !password) {
        throw Error("All fields must be filled!");
    }
    const user = await this.findOne({username});
    if (!user) {
        throw Error("Incorrect username / No one with that username");
    }
    const match = await bcrypt.compare(password,user.password);
    if (!match) {
        throw Error("Wrong Password");
    }
    return user;
};

const User = mongoose.model("ChatUser",userSchema);

module.exports = User;








