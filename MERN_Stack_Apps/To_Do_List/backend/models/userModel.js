const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const bcrypt   = require('bcryptjs');
const validator= require('validator');

const userSchema = new Schema ({
    email : {type:String,required:true},
    password : {type:String,required:true}
});

//Static method to signup:
userSchema.statics.signup = async function (email,password) {
    //See if all the fields are filled :
    if (!email || !password) {
        throw Error("All fields must be filled!")
    }
    //Validate email:
    if (!validator.isEmail(email)) {
        throw Error('Invalid Email!')
    }
    //Validate password:
    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough!");
    }
    //Check if email is already in use:
    const exits = await this.findOne({email});
    if (exits) {
        throw Error("Email already in use!")
    }
    //Create Salt:
    const salt = await bcrypt.genSalt(10);
    //Create a hash from password+salt:
    const hash = await bcrypt.hash(password,salt);
    //Create new user:
    const user = await this.create({email,password:hash});
    return user;
}

userSchema.statics.login = async function (email,password) {
    //See if all fields are filled:
    if (!email || !password) {
        throw Error("All fields must be filled!");
    }
    //Now we find the user with the matching email:
    const user = this.findOne({email});
    if (!user) {
        throw Error("Incorrect Email!");
    }
    //Check if the password is right:
    const match = await bcrypt.compare(password,user.password);
    if (!match) {
        throw Error("Incorrect Password!");
    }
    return user;
}

module.exports = mongoose.model('TodoListUser',userSchema);