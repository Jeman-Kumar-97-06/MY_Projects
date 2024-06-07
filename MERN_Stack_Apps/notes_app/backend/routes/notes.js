const express = require('express');
const {
    createNotes,
    getNotes,
    getNote,
    updateNote,
    deleteNote
}             = require('../controllers/notesController');

const router  = express.router();

//Route handler to get all notes:
router.get('/',getNotes);

//Route handler to get a single note:
router.get('/:id',getNote);

//Route handler to post a note:
router.post('/',createNotes);

//Route handler to delete a note:
router.delete('/:id',deleteNote);

//Route handler to update a note:
router.path('/:id',updateNote)