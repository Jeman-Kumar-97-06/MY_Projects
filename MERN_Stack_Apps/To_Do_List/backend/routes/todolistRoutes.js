const exp = require('express');
const requireAuth = require('../middleware/requireAuth');
const {createList,getLists,getList,updateList,deleteList} = require('../controllers/listController');
const router = exp.Router();

router.use(requireAuth);

router.get('/',getLists);

router.get('/:id',getList);

router.post('/',createList);

router.delete('/:id',deleteList);

router.patch('/:id',updateList);

module.exports = router;