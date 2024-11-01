const express = require('express');

const router  = express.Router();
const {
    getWalls,
    uploadWalls,
    updateWalls
}             = require('../controllers/wallControllers');

router.get('/',getWalls);

router.post('/',uploadWalls);

router.patch("/",updateWalls);

module.exports = router;