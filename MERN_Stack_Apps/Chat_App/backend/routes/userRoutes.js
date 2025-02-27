import requireAuth from '../middleware/requireAuth';

const express = require('express');
const router  = express.Router();

router.use(requireAuth);

router.get('/',getUsersForSiderbar)

export default router;