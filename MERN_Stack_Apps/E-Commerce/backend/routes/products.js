const express = require('express');
const router  = express.Router();

const {
    getAllProducts,
    getProduct,
    createProd
}             = require('../controllers/productControllers')

//Get all products:
router.get('/',getAllProducts);

//Create a product:
router.post('/',createProd);

//Get a product by it's id:
router.get('/:id',getProduct);

module.exports = router;
