const List = require('../models/listModel');
const mongoose = require('mongoose');

//controller to get all the lists
const getLists =  async (req,res) => {
    const user_id = req.user._id;
    const lists = await List.find({user_id}).sort({createdAt:-1});
    res.status(200).json(lists);
}

//contrller to get a specific list with the given ID
const getList = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"Invalid ID!"});
    }
    const list_yo = await List.findById(id);
    if (!list_yo)
    {
        return res.status(404).json({error:"No List found with the specified ID!"});
    }
    res.status(200).json(list_yo);
}

//controller to create a new list
const createList = async (req,res) => {
    const {title,list} = req.body;
    try
    {
        const user_id = req.user._id
        const list_yo = await List.create({title,list,user_id});
        res.status(200).json(list_yo);
    }
    catch(err)
    {
        res.status(400).json({error:err.message});
    }
}

//controller to delete a list
const deleteList = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"Invalid ID!"});
    }
    const list_yo = await List.findOneAndDelete({_id:id});
    if(!list_yo)
    {
        return res.status(404).json({error:"No List found with the specified ID!"})
    }
    res.status(200).json(list_yo);
}

const updateList = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"Invalid ID!"});
    }
    const list_yo = await List.findOneAndUpdate({_id:id},{...req.body});
    if(!list_yo)
    {
        return res.status(404).json({error:"No List found with the specified ID!"});
    }
    res.status(200).json(list_yo);
};

module.exports = {createList,getLists,getList,updateList,deleteList};