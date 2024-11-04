const mongoose  = require('mongoose');
const bcrypt    = require('bcrypt');
const validator = require('validator');
const Schema    = mongoose.Schema;

const userSchema = new Schema({
    name     : {type:String,required:true},
    email    : {type:String,required:true},
    password : {type:String,required:true}
});

//'login' static method used in 'userControllers' line : 16
userSchema.statics.login = async function(email,password) {
    //Check if all fields are filled
    if (!email || !password) {
        throw Error("All fields must be filled :(")
    }
    //Find  a user with the give email:
    const user = await this.findOne({email});

    if (!user) {
        throw Error('Incorrect Email!')
    }

    const match = await bcrypt.compare(password,user.password);

    if (!match) {
        throw Error("Incorrect Password!")
    }

    return user;
}

userSchema.statics.signup = async function(name,email,password){
    //Check if all fields are filled:
    if (!name || !email || !password){
        throw Error("All fields must be filled :(");
    }

    //Validate email format and password strength:
    if (!validator.isEmail(email)) {
        throw Error("Invalid Email")
    }

    if (!validator.isStrongPassword(password)) {
        throw Error("Password not strong enough")
    }

    const exists = await this.findOne({email});

    if (exists) {
        throw Error("Email already in use");
    }

    //Create a salt:
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({name,email,password:hash});
    return user;
}

module.exports = mongoose.model('walluser',userSchema);