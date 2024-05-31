const express                = require('express');
const router                 = express.Router();
const {getAllCartItems
}                            = require('../controllers/cartControllers');

router.get('/:id',getAllCartItems);

module.exports               = router;