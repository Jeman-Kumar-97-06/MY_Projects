const List = require('../models/listModel');
const mongoose = require('mongoose');

//controller to get all the lists
const getLists =  async (req,res) => {
    const lists = await List.find({}).sort({createdAt:-1});
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
    const {title,load,reps} = 
}

module.exports = {createList,getLists,getList,updateList,deleteList};