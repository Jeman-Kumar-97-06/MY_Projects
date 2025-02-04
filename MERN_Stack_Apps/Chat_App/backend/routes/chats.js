const express = require('express');
const router  = express.Router();

const {
    getAllMsgs,storeAMsg
}             = require('../controllers/chatControllers');

router.get('/',getAllMsgs);

router.post('/',storeAMsg);

module.exports = router;
