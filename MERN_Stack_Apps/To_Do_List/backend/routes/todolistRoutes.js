const exp = require('express');
const {createList,getLists,getList,updateList,deleteList} = require('../controllers/listController');
const router = exp.Router();

router.get('/',getLists);

router.get('/:id',getList);

router.post('/',createList);

router.delete('/:id',deleteList);

router.patch('/:id',updateList);

module.exports = router;