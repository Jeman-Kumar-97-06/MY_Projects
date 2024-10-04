const express = require('express');
const router  = express.Router();
const {
    getCart
}             = require('../controllers/cartsControllers');

//Get a cart by user_id:
router.get('/:id',getCart);

module.exports = router;