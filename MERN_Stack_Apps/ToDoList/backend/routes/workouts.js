const exp    = require('express');
const router = exp.Router();

const {getLists,getList,createList,deleteList,updateList}
             = require('./controllers/todoListControllers');

router.get('/',getLists);

router.get('/:id',getList);

router.post('/',createList);

router.delete('/:id',deleteList);

router.patch('/:id',updateList);