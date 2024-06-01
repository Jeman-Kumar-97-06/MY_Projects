const express                = require('express');
const router                 = express.Router();
const {getAllCartItems,
    createCartItem
}                            = require('../controllers/cartControllers');

router.get('/:id',getAllCartItems);
router.post('/:id',createCartItem);

module.exports               = router;