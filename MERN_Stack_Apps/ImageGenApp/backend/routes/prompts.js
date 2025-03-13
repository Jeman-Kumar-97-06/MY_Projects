const {getPrompts, savePrompts, saveGeneratedImage} = require('../controllers/promptControllers');
const express = require('express');
const router  = express.Router();

router.get('/gt_p',getPrompts);

router.post('/save_text',savePrompts);

router.post('/save_img',saveGeneratedImage);

module.exports = router;