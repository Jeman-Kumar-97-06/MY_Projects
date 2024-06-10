const Note     = require('../models/noteModel');

const mongoose = require('mongoose') ;

//Controller to get all notes:
const getNotes = async (req,res) => {
    const notes = await Note.find({}).sort({createAt:-1});
    //The following sends a success http response with code 200 and reponse body that has...
    //... an array of 'note' type notes with each having their own 'title','note_con','_id'
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
    
    const note = await Note.findById(id);
    if(!note)
        {
            return res.status(400).json({error:"No note matching the 'id'!"});
        }
    res.status(200).json(note);
}

//Controller to create a note:
const createNotes = async (req,res) => {
    const {title,note_con} = req.body;
    try
    {
        const note = await Note.create({title,note_con});
        res.status(200).json(note)
    }
    catch(err)
    {
        res.status(400).json({error:err.message});
    }
};

//Controller to delete a note:
const deleteNote = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:"Improperly formatted ID!"});
        }
    
    const note = await Note.findOneAndDelete({_id:id});
    if(!note)
        {
            return res.status(400).json({error:"No note matching the 'id'!"});
        }
    res.status(200).json(note);
}

//Controller to Update a note:
const updateNote = async (req,res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:"Improperly formatted ID!"});
        }
    
    const note = await Note.findOneAndUpdate({_id:id},{...req.body});
    if(!note)
        {
            return res.status(400).json({error:"No note matching the 'id'!"});
        }
    res.status(200).json(note);
}

module.exports= {createNotes,getNotes,getNote,updateNote,deleteNote}