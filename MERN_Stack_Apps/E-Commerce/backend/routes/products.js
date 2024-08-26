const express = require('express');
const Product = require('../models/productModel');

const router  = express.Router();

const {getProducts,getProduct,createProduct} = require('../controllers/productControllers');

router.get('/',getProducts);

router.get('/:id',getProduct);

router.post('/',createProduct);

module.exports = router;