const express = require('express');
const { loginUser, signupUser } = require('../controllers/authControllers');
const router  = express.Router();

//The following handles request coming to '/api/auth/login'
router.get('/login',loginUser);
//The following handles request coming to '/api/auth/signup'
router.get('/signup',signupUser);

module.exports = router;