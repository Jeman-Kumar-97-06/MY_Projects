const Todolist = require('../models/todolistModel');
const mongoose = require('mongoose');

//Controller function to get all lists when http req is sent to '/':
const getLists = async (req,res) => {
    const lTs = await Todolist.find({}).sort({createdAt:-1});
    res.status(200).json(lTs);
};

//Controller function to get a specific list when http req is sent to '/:id':
const getList = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"Invalid ID!"})
    }
    const lT = await Todolist.findById(id);
    if (!lT)
    {
        return res.status(404).json({error:"No Matching lists with the specified ID!"})
    };
    res.status(200).json(lT);
};

//Controller function to post a new list:
const createList = async (req,res) => {
    const {title,list} = req.body;
    try
    {
        const lT = await Todolist.create({title,list});
        res.status(200).json(lT);
    }
    catch (error) 
    {
        res.status(400).json({error:error.message});
    }
}

//Controller function to delete a list:
const deleteList = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) 
    {
        return res.status(404).json({error:'Invalid ID!'});
    }
    const lT = await Todolist.findOneAndDelete({_id:id});
    if(!lT)
    {
        return res.status(404).json({error:'No Matching lists with the specified ID!'})
    }
    res.status(200).json(lT);
}

//Controller function to patch/update a list when http request is sent to '/:id':
const updateList = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'Invalid ID!'});
    }
    const lT = await Todolist.findOneAndUpdate({_id:id},{...req.body});
    if (!lT)
    {
        return res.status(404).json({error:"No Match found!"});
    };
    res.status(200).json(lT);
}

module.exports = {getLists,getList,createList,deleteList,updateList};