const Note = require('../models/noteModel');
const mong = require('mongoose');

//get all notes :
const getNotes = async (req,res) => {
    const user_id  = req.user._id;

    const all_notes = await Note.find({user_id}).sort({createdAt:-1});
    res.status(200).json(all_notes)
}
//get a single note:
const getNote = async (req,res) => {
    const {id} = req.params;
    const a_note = await Note.findById(id);
    if(!mong.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"})
    }
    if(!a_note){
        return res.status(404).json({error:"No match found with the specfied ID!"});
    }
    res.status(200).json(a_note);
}
//create a note:
const createNote = async (req,res) => {
    const {title,body} = req.body;
    try{
        const user_id  = req.user._id;
        const new_note = await Note.create({title,body,user_id});
        res.status(200).json(new_note);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
//delete a note:
const delNote = async (req,res) => {
    const {id} = req.params;
    if (!mong.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const note_to_del = await Note.findOneAndDelete({_id:id});
    if(!note_to_del){
        return res.status(404).json({error:"No Match found with the specified ID!"});
    }
    res.status(200).json(note_to_del);
}
//patch a note:
const patchNote = async (req,res) => {
    const {id} = req.params;
    if (!mong.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const note_to_patch = await Note.findOneAndUpdate({_id:id},{...req.body});
    if (!note_to_patch){
        return res.status(404).json({error:"No match found with the specified ID!"});
    }
    res.status(200).json(note_to_patch)
}

module.exports = {
    getNotes,
    getNote,
    createNote,
    delNote,
    patchNote
} 