const express = require('express');
const router  = express.Router();
const {
    getCart
}             = require('../controllers/cartsControllers');

router.get('/:id',getCart);

module.exports = router;