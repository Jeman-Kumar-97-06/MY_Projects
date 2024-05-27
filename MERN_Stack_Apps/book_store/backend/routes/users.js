const express                = require('express');
const router                 = express.Router();
const {loginUser,signupUser} = require('../controllers/usersControllers.js')

//LOGIN ROUTE :
router.post('/login',loginUser);

//SIGNUP ROUTE :
router.post('/signup',signupUser);

module.exports = router;