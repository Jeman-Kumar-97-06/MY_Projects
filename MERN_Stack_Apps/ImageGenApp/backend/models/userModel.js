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
userSchema.statics.signup = async function(fulln,usrn,pwd,pfPic) {
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
    //Create a salt to add to the password :
    const salt = await bcrypt.genSalt(10);
    //Create a hash with the above salt:
    const hash = await bcrypt.hash(pwd,salt);
    //Save the user as a new doc to mongodb:
    const user = await this.create({fulln,usrn,pwd:hash,pfPic});
    //Return that new user:
    return user;
}

//Static method to login the user:
userSchema.statics.login = async function(usrn,pwd) {
    //See if all the fields are filled :
    if (!usrn || !pwd) {
        throw Error("All fields must be filled!")
    }
    const user = await this.findOne({usrn});
    if (!user) {
        throw Error("Incorrect Username!")
    };
    const match = await bcrypt.compare(pwd,user.pwd);
    if (!match) {
        throw Error("Incorrect Password");
    }
    return user;
};

module.exports = mongoose.model('imggenuser',userSchema);