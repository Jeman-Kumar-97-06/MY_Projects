const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    usrname : {type:String,required:true,unique:true},
    email : {type:String,required:true,unique:true},
    password: {type:String,required:true,unique:false}
});

//Static method to signup: 
//Cuz creating a user isn't just enough:
userSchema.statics.signup = async function(usrname,email,password) {
    //See if all fields are filled:
    if (!email || !password || !usrname){
        throw Error("All fields must be filled!")
    }
    //Validate Email:
    if (!validator.isEmail(email)){
        throw Error("Invalid Email!")
    }
    //Validate Password/ Test password strength:
    if (!validator.isStrongPassword(password)){
        throw Error("Weak Password!")
    }
    //Checking if email is already in use:
    const exists = await this.findOne({email});
    if (exists) {
        throw Error("Email already in use!")
    }
    const usrExists = await this.findOne({usrname});
    if (usrExists) {
        throw Error("User Name already in use!")
    }
    //Create Salt:
    const salt = await bcrypt.genSalt(10);
    //Use salt and password to create a Hash
    const hash = await bcrypt.hash(password,salt);
    //Now finally create a user object:
    const user = await this.create({usrname,email,password:hash});
    return user;
}

userSchema.statics.login = async function(usrname,email,password) {
    if (!email || !password || !usrname) {
        throw Error('All fields must be filled!');
    }
    //See if there's a user matching the email
    const user = await this.findOne({email});
    if (!user){
        throw Error("Incorrect Email!")
    }
    const usrName = await this.findOne({usrname});
    if (!usrName) {
        throw Error("Incorrect User Name");
    }
    //See if the password is right by comparing the password typed in login form to the...
    //...hash saved
    const match = await bcrypt.compare(password,user.password);
    if (!match) {
        throw Error("Incorrect Password!");
    }
    return user;
}

module.exports = mongoose.model("SocialUser",userSchema);