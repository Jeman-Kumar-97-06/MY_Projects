const express = require('express');

const router  = express.Router();
const {
    getWalls,
    getWall,
    uploadWalls,
}             = require('../controllers/wallControllers');

const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

router.get('/',getWalls);

router.get('/:id',getWall);

router.post('/',uploadWalls);

module.exports = router;