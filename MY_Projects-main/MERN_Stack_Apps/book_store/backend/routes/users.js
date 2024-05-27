const express = require('express');
const router  = express.Router();
const {loginUser,signupUser} = require('../controllers/usersController');

//User Login Route :
router.post('/login',loginUser);

//User Signup Route :
router.post('/signup',signupUser);

module.exports = router;