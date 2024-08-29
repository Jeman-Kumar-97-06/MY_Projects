const express = require('express');
const {
    getQuestions
}             = require('../controllers/questControllers');

const router  = express.Router();

router.get('/',getQuestions);

module.exports = router;