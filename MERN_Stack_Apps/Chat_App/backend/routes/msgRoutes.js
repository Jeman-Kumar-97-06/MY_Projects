const express = require('express');
const {sendMessage, getMessages} = require('../controllers/msgControllers');
const protectRoutes = require('../middleware/requireAuth');
const router  = express.Router();

router.get('/:id',protectRoutes,getMessages);
router.post('/send/:id',protectRoutes,sendMessage);

module.exports = router;