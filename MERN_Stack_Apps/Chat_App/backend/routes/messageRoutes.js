import { sendMessage,getMessages } from '../controllers/messageControllers';
import requireAuth from '../middleware/requireAuth';

const express = require('express');

const router  = express.Router();

router.use(requireAuth);

router.get('/:id',getMessages);
router.post('/send/:id',sendMessage);

export default router;