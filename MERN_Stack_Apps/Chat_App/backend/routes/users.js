const express = require('express');
const router  = express.Router();

const {
    signupUser,
    loginUser
}             = require('../')