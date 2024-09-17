const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;
const bcrypt    = require('bcrypt');
const validator = require('validator');

const userSchema = new Schema({
    email    : {type:String,required:true,unique:true},
    password : {type:String,required:true,unique:false}
});

//static method to signup:
userSchema.statics.signup = async function(email,password) {
    //See if all fields are filled:
    if (!email || !password) {
        throw Error("All fields must be filled")
    }
    //Validate Email:
    if (!validator.isEmail(email)) {
        throw Error('Invalid Email!')
    }
    //Validate Password/ Test Password Strength:
    if (!validator.isStrongPassword(password)) {
        throw Error('Weak Password!')
    }
    //Checking if email is already in use:
    const exists = await this.findOne({email})
    if (exists) {
        throw Error("Email already in use!")
    }
    //Usually a salt is concatenated to the password string to secure it.
    //It will alse make hard to find 2 users with same passwords bcoz their salts will be different.
    //In the following line we are generating a salt of length 10.
    const salt = await bcrypt.genSalt(10);
    //Now we hash the password+salt:
    const hash = await bcrypt.hash(password,salt);
    //Now we create a user with email and hashed password.
    const user = await this.create({email,password:hash});
    return user;
}

module.exports = mongoose.model('NoteUser',userSchema);