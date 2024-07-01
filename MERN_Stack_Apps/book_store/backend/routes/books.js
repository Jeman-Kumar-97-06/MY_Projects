const express                = require('express');
const router                 = express.Router();
const {getAllBooks
}                            = require('../controllers/booksControllers');

router.get('/',getAllBooks)

module.exports               = router;