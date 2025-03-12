const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    fulln : {type:String,required:true},
    usrn  : {type:String,required:true},
    pwd   : {type:String,required:true},
    pfPic : {type:String,required:true}
});

//A static method to SIGNUP user:
useSchema.statics.signup = async function(fulln,usrn,pwd,pfPic) {
    //See if all fields are filled : 
    if (!fulln || !usrn || !pwd || !pfPic) {
        throw Error("All fields must be filled!");
    }
    //See if the password is strong enough :
    if (!validator.isStrongPassword(pwd)) {
        throw Error("Password not strong enough!")
    }
    //See if the user with the given usrn exists : 
    const exists = await this.findOne({usrn:usrn});
    //If a user exists : 
    if (exists) {
        throw Error("Username already exists!");
    };
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrtpt.hash(pwd,salt);
    const user = await this.create({fulln,usern,pwd:hash,pfPic});
    return user;
}