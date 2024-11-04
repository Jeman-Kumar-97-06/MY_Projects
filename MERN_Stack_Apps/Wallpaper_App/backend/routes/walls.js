const express = require('express');

const router  = express.Router();
const {
    getWalls,
    getWall,
    uploadWalls,
}             = require('../controllers/wallControllers');

router.get('/',getWalls);

router.get('/:id',getWall)

router.post('/',uploadWalls);

module.exports = router;