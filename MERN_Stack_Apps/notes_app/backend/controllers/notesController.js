const Note     = require('../models/noteModel');

const mongoose = require('mongoose') ;
createNotes,
    getNotes,
    getNote,
    updateNote,
    deleteNote
//Controller to get all notes:
const getNotes = async (req,res) => {
    const notes = await Note.find({}).sort({createAt:-1});
    res.status(200).json(notes);
}

//Controller to get a specific note:
const getNote  = async (req,res) => {
    const {id}  = req.params;
    //The following condition checks if the 'id' is of proper format.
    //It also prevents app from crashing from improperly formatted id value.
    if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:'Improperly formatted ID!'})
        }
}