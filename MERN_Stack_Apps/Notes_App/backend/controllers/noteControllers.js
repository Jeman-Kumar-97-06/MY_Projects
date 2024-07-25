const Note     = require('../models/noteModel');
const mongoose = require('mongoose');

//Controller to get all notes when GET req is sent to '/':
const getNotes = async (req,res) => {
    const all_notes =await Note.find({}).sort({createAt:-1});
    res.status(200).json(all_notes);
}

//Controller to get a specific note when GET req is sent to '/:id':
const getNote = async (req,res) => {
    const {id} = req.params;
    //Before finding a match for the 'id', first see if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"The ID is Invalid!"})
    }
    const note = await Note.findById(id);
    if (!note)
    {
        return res.status(404).json({error:"No matching note found with the given ID!"})
    }
    res.status(200).json(note);
}

//Controller to create a new note with the body of the POST req sent to '/':
const createNote = async (req,res) => {
    const {title,note_con} = req.body;
    try
    {
        const new_note = await Note.create({title,note_con});
        res.status(200).json(new_note);
    }
    catch(err)
    {
        res.status(400).json({error:err.message});
    };
}

//Controller to delete a note when a DELETE request is sent to '/:id':
const deleteNote = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const note = await Note.findOneAndDelete({_id:id});
    if (!note)
    {
        return res.status(404).json({error:"No matching note found with the given ID!"})
    }
    res.status(200).json(note);
}

//Controller to update a note with the body of PATCH request sent to '/:id':
const updateNote = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const note = await Note.findOneAndUpdate({_id:id},{...req.body});
    if(!note)
    {
        return res.status(404).json({error:"No matching note found with the given ID!"})
    }
    res.status(200).json(note);
};

module.exports = {getNotes,getNote,createNote,deleteNote,updateNote};