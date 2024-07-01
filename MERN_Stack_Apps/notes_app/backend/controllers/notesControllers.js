const Note     = require('../models/noteModel');
const mongoose = require('mongoose');

const getNotes = async (req,res) => {
    const notes = await Note.find({}).sort({createdAt : -1});
    res.status(200).json(notes);
}

const getNote = async (req,res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:"Invalid ID!"});
        }
    const note = await Note.findById(id);
    if(!note)
        {
            return res.status(404).json({error:"No matching note found!"})
        }
    res.status(200).json(note);
}

const createNote = async (req,res) => {
    const {title,note_con} = req.body;

    let emptyFields = [];

    if(!title)
        {
            emptyFields.push('title');
        }
    if(!note_con)
        {
            emptyFields.push('note_con');
        }
    
    if(emptyFields.length > 0)
        {
            return res.status(400).json({error:"Please fill all fields",emptyFields});
        }

    try
    {
        const note = await Note.create({title,note_con});
        res.status(200).json(note);
    }
    catch (err)
    {
        res.status(400).json({error:err.message});
    }
}

const deleteNote = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:"Invalid ID!"});
        }
    const note = await Note.findOneAndDelete({_id:id});
    if(!note)
        {
            return res.status(404).json({error:'No matching note found!'});
        }
    res.status(200).json(note);
}

const updateNote = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:"Invalid ID!"});
        }
    const note = await Note.findOneAndUpdate({_id:id},{...req.body});
    if(!note)
        {
            return res.status(404).json({error:"No matching note found!"});
        }
    req.status(200).json(note);
}

module.exports = {getNotes,getNote,createNote,deleteNote,updateNote};