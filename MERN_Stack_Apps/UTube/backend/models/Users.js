const mongoose  = require('mongoose');
const usrSchema = new mongoose.Schema({
    username : String,
    email : String,
    password : String
});

module.exports = mongoose.model('User',usrSchema);