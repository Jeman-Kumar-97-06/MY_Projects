const mongoose   = require('mongoose');
const bcrypt     = require('bcrypt');
const validator  = require('validator');
const Schema     = mongoose.Schema;
//User Schema Definition
const userSchema = new Schema(
    {
        email    : {type:String,required:true,unique:true},
        password : {type:String,required:true}
    }
)

//Static Login Method :
userSchema.statics.login  = async function (email,password){
    //validation:
    if(!email || !password)
        {
            throw Error('All fields must be filled!')
        }
    const user = await this.findOne({email});
    if(!user)
        {
            throw Error('Incorrect Email!');
        }
    const match = await bcrypt.compare(password,user.password);
    if(!match)
        {
            throw Error("Incorrect Password");
        }
    return user;
}

//Static Signup Method :
userSchema.statics.signup = async function (email,password){
    //Check if either email/password field is empty :
    if(!email || !password)
        {
            throw Error('All fields must be filled');
        }
    //Check if the email is valid and password is strong :
    if(!validator.isEmail(email))
        {
            throw Error("Email is In-Valid");
        }
    if(!validator.isStrongPassword(password))
        {
            throw Error("Password isn't string enough");
        }
    //Checking if the email is already in use:
    const exists = await this.findOne({email});
    if(exists) 
        {
            throw Error('Email Already In Use!');
        }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({email,password:hash});
    return user;
}

module.exports = mongoose.model("BookUser",userSchema);