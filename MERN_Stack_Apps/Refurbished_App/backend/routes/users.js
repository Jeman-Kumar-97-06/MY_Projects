const express = require('express');
const router  = express.Router();

const {
    googleLogin,
    signupUser,
    loginUser
}             = require('../controllers/userControllers');

router.post('/google-login',googleLogin);

router.post('/login',loginUser);

router.post('/signup',signupUser);

module.exports = router;