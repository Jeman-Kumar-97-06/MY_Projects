const requireAuth = require('../middleware/requireAuth');
const {getPrompts, saveGeneratedImage} = require('../controllers/promptControllers');
const express = require('express');
const router  = express.Router();

router.use(requireAuth)

router.get('/gt_p',getPrompts);

router.post('/save_p',saveGeneratedImage);

module.exports = router;