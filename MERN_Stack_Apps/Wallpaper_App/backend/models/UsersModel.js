const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    name : {type:String,required:true},
    email: {type:String,required:true},
    password : {type:String,required:true}
});

userSchema.statics.signup = async function(name,email,password){
    //See if all fields are filled!
    if (!name || !email || !password) {
        throw Error("All fields must be filled!")
    }
    //Validate the Email provided!
    if (!validator.isEmail(email)){
        throw Error('Invalid Email!')
    }
    //Validate strength of password provided
    if (!validator.isStrongPassword(password)){
        throw Error('Password not strong enough!');
    }
    //See if the user already exist
    const exists = await this.findOne({email});
    //If exists, send error saying 'user already exists'
    if (exists){
        throw Error("User with the Email already exists!")
    }
    //If not, create a salt:
    const salt = await bcrypt.genSalt(10);
    //Stick salt to the password and create a hash:
    const hash = await bcrypt.hash(password,salt);
    //Try creating the user:
    const user = await this.create({name,email,password:hash});
    return user;
}

userSchema.statics.login = async function(email,password){
    if (!email || !password){
        throw Error("All fields must be filled!")
    }
    const user = await this.findOne({email});
    if (!user){
        throw Error('Incorrect Email!')
    }
    const match = await bcrypt.compare(password,user.password);
    if (!match){
        throw Error("Incorrect Password!");
    }
    return user;
}


module.exports = mongoose.model('wallpaperuser',userSchema);