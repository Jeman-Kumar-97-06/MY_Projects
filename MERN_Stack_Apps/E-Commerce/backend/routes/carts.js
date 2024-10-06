const express = require('express');
const router  = express.Router();
const {
    getCart
}             = require('../controllers/cartsControllers');

const requireAuth = require('../middleware/requireAuth');

router.use(requireAuth);

//Get a cart by user_id:
router.get('/:id',getCart);

module.exports = router;