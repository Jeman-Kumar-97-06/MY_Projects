import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
});

UserSchema.statics.signup = async function (name,email,password) {
    //See if any of the fields is left empty
    if (!name || !email || !password) {
        throw Error("All fields must be filled!")
    }
    //See if the email is valid
    if (!validator.isEmail(email)) {
        throw Error("Invalid Email!");
    }
    //See if the password is strong enough
    if (!validator.isStrongPassword(password)){
        throw Error("Password not strong enough!")
    }
    //See if a user exists with the given email
    const exists = await this.findOne({email});
    //If there's one, send an error telling 'Email already in use'
    if (exists) {
        throw Error("Email already in use!")
    }
    //If all goes well, we are going to create a user with the give name, email and password
    //Before that, to create a hash out of the given password, create a salt
    const salt = await bcrypt.genSalt(10);
    //Create the hash
    const hash = await bcrypt.hash(password,salt);
    //Save the user to the database
    const user = await this.create({name,email,password:hash});
    return user;
}

UserSchema.statics.login = async function (email,password){
    if (!email || !password) {
        throw Error("All fields must be filled!")
    }
    const user = await this.findOne({email});
    if (!user) {
        throw Error("Incorrect Email");
    }
    const match = await bcrypt.compare(password,user.password);
    if (!match) {
        throw Error("Incorrect Password");
    }
    return user;
}

export default mongoose.model("User",UserSchema);