const express = require('express');
const router  = express.Router();
const {getBooks,getBook,addToCart,deleteCartItem} = require('../controllers/booksController');

//Route handler to GET all books :
router.get('/',getBooks);

//Route handler to GET a single cart Item :
router.get('/:id',getBook);

//Route handler to GET cart items :
//router.get('/cart',getCart);

//Route handler to ADD to Cart:
router.post('/cart',addToCart);

//Route handler to DELETE a Cart item:
router.delete('/cart/:id',deleteCartItem);

module.exports = router;