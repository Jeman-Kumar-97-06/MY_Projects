const express = require('express');
const router  = express.Router();
const {signupUser,
       loginUser
}             = require('../controllers/userController');

//Login Route: [Tells what function to execute when post req is send to 'api/users/login']
router.post('/login',loginUser)

//Sign Up Route : 
router.post('/signup',signupUser)

module.exports = router;