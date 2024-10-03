const express = require('express');
const router  = express.Router();

const {
    getAllProducts,
    getProduct,
    createProd
}             = require('../controllers/productControllers')

//Get all products:
router.get('/',getAllProducts);

router.post('/',createProd)

//Get a product:
router.get('/:id',getProduct);

module.exports = router;
