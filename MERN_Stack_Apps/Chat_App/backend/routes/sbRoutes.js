const express = require('express');
const protectRoutes = require('../middleware/requireAuth');
const getUsersForSb = require('../controllers/sbuserControllers');
const router  = express.Router();

router.get('/',protectRoutes,getUsersForSb);

module.exports = router;