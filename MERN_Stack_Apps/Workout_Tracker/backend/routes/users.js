const express = require('express');
const router  = express.Router();
const {loginUser,
       signupUser
}             = require('../controllers/usersController');
//Login Route:
router.post('/login',loginUser)

//SignUp Route:
router.post('/signup',signupUser)

module.exports = router;