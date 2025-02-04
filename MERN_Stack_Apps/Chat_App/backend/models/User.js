const mongoose = require('mongoose');
const validator = require('validator');


const UserSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
});

UserSchema.statics.login = async function (name,email,password) {
    if (!name || !email || !password) {
        throw Error("All fields must be filled!")
    }
    if (!validator)
}

UserSchema.statics.signup = () => {

}

export default mongoose.model("User",UserSchema);