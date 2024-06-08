const express = require('express');
const {
    createLists,
    getLists,
    getList,
    updateList,
    deleteList
}             = require('../controllers/listsController');

const router  = express.Router();

//Route handler to get all notes:
router.get('/',getLists);

//Route handler to get a single note:
router.get('/:id',getList);

//Route handler to post a note:
router.post('/',createLists);

//Route handler to delete a note:
router.delete('/:id',deleteList);

//Route handler to update a note:
router.patch('/:id',updateList)

module.exports = router;