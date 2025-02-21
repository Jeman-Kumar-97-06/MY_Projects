const mongoose   = require('mongoose');
const bcrypt     = require('bcrypt');
const validator  = require('validator');
const Schema     = mongoose.Schema;

const userSchema = new Schema({
    fullname : {type:String,required:true},
    username : {type:String,required:true},
    password : {type:String,required:true}
});

userSchema.statics.signup = async function (fullname,username,password) {
    if (!fullname || !username || !password) {
        throw Error ("All fields must be filled!");
    }
    if (!validator.isStrongPassword(password)) {
        throw Error ("Password ain't strong enough!");
    }
    const exists = await this.findOne({username});
    if (exists) {
        throw Error("User already exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({fullname,username,password});
    return user;
};

userSchema.statics.login = async function (username,password) {
    if (!username || !password) {
        throw Error ("All fields must be filled!");
    }
    const user = await this.findOne({username});
    if (!user) {
        throw Error("Wrong username / user with that name doesn't exist");
    }
    const match = await bcrypt.compare(password,user.password);
    if(!match) {
        throw Error("Wrong password!")
    }
    return user;
};

module.exports = mongoose.model('wallpickuser',userSchema);