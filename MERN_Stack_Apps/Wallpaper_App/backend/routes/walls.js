const express = require('express');

const router  = express.Router();
const {
    getWalls,
    getWall,
    uploadWalls,
    updateWalls
}             = require('../controllers/wallControllers');

router.get('/',getWalls);

router.get('/:id',getWall)

router.post('/',uploadWalls);

router.patch("/",updateWalls);

module.exports = router;