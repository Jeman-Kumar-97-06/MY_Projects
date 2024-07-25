const express = require('express');
const {
    createNote,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}              = require('../controllers/noteControllers');
const router   = express.Router();

router.get('/',getNotes);

router.get('/:id',getNote);

router.post('/',createNote);

router.delete('/:id',deleteNote);

router.patch('/:id',updateNote);

module.exports = router;