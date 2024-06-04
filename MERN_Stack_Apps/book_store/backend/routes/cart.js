const express                = require('express');
const router                 = express.Router();
const {getAllCartItems,
    createCartItem
}                            = require('../controllers/cartControllers');
const requireAuth = require('../middleware/requireAuth')

router.use(requireAuth);
router.get('/:id',getAllCartItems);
router.post('/:id',createCartItem);

module.exports               = router;