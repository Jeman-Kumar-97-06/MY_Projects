const express = require('express');
const router  = express.Router();

//The following handles request coming to '/api/auth/login'
router.get('/login',(req,res)=>{
    res.send("Login Route");
})
//The following handles request coming to '/api/auth/signup'
router.get('/signup',(req,res)=>{
    res.send("Signup Route");
})

export default router;