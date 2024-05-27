//This file creates 'user' model:

const bcrypt         = require('bcrypt');
const validate       = require('validator');
const mongoose       = require('mongoose');
const Schema         = mongoose.Schema;

const bookuserSchema = new Schema({
    email    : {type:String,required:true,unique:true},
    password : {type:String,required:true,}
})

//Static LOGIN  method :-
bookuserSchema.statics.login  = async function (email,password){
    //CHECK IF THE EMAIL AND PASSWORD FIELDS ARE FILLED
    if(!email || !password)
        {
            throw Error('All fields must be filled');
        }
    //CHECK IF THE EMAIL'S USER EXISTS :
    const user = await this.findOne({email});
    if(!user)
        {
            throw Error('Incorrect Email')
        }
    const match = await bcrypt.compare(password,user.password);
    if(!match)
        {
            throw Error('Incorrect Password!')
        }
    return user;
}

//Static SIGNUP method :-
bookuserSchema.statics.signup = async function (email,password) {
    //CHECK IF THE EMAIL AND PASSWORD FIELDS ARE FILLED
    if(!email || !password)
        {
            throw Error('All fields must be filled');
        }
    //CHECK IF THE EMAIL IS IN VALID FORMAT AND PASSWORD IS STRONG ENOUGH
    if(!validate.isEmail(email))
        {
            throw Error("Email isn't valid");
        }
    if(!validate.isStrongPassword(password))
        {
            throw Error("Password isn't strong enough")
        }
    
    //IF ALL WENT RIGHT, SEARCH WHETHER THE EMAIL EXISTS / IN USE :
    const email_exits = await this.findOne({email});
    if(email_exits)
        {
            throw Error('Email already in use')
        }
    //else ...
    //Add pwd salt:
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password,salt);
    const user = await this.create({email,password:hash});
    return user;
}

//This following line will use 'bookuserSchema' model to create a collection 'BookUser' inside mongodb.
module.exports = mongoose.model('BookUser',bookuserSchema);