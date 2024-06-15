const express = require('express');

const {
    getNotes,
    getNote,
    createNote,
    deleteNote,
    updateNote
}             = require('../controllers/notesControllers');

const router  = express.Router();

router.get('/',getNotes);

router.get('/:id',getNote);

router.post('/',createNote);

router.delete('/:id',deleteNote);

router.patch('/:id',updateNote);

module.exports = router;