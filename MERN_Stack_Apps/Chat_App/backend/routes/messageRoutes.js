import { sendMessage } from '../controllers/messageControllers';

const express = require('express');

const router  = express.Router();

router.post('/send/:id',sendMessage);

export default router;