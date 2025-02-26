import { sendMessage } from '../controllers/messageControllers';
import requireAuth from '../middleware/requireAuth';

const express = require('express');

const router  = express.Router();

router.use(requireAuth);

router.get('/:id',getMessage);
router.post('/send/:id',sendMessage);

export default router;