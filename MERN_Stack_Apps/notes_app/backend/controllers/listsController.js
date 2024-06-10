const List     = require('../models/listModel');
const mongoose = require('mongoose') ;

//Controller to get all list:
const getLists = async (req,res) => {
    const lists = await List.find({}).sort({createAt:-1});
    //The following sends a success http response with code 200 and reponse body that has...
    //... an array of 'list' type notes with each having their own 'title','list_con','_id'
    res.status(200).json(lists);
}

//Controller to get a specific list:
const getList  = async (req,res) => {
    const {id}  = req.params;
    //The following condition checks if the 'id' is of proper format.
    //It also prevents app from crashing from improperly formatted id value.
    if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:'Improperly formatted ID!'})
        }
    
    const list = await List.findById(id);
    if(!list)
        {
            return res.status(400).json({error:"No list matching the 'id'!"});
        }
    //if all of the above executes, this function will send a success http response with 200..
    //..code with response body that has the requested 'list' obj with 'title','list_con','_id'
    res.status(200).json(list);
}

//Controller to create a list:
const createLists = async (req,res) => {
    const {title,list_con} = req.body;
    try
    {
        const list = await List.create({title,list_con});
        //returns the created list as JSON object
        res.status(200).json(list)
    }
    catch(err)
    {
        res.status(400).json({error:err.message});
    }
};

//Controller to delete a list:
const deleteList = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:"Improperly formatted ID!"});
        }
    
    const list = await List.findOneAndDelete({_id:id});
    if(!note)
        {
            return res.status(400).json({error:"No list matching the 'id'!"});
        }
    //returns the deleted 'list' note item.
    res.status(200).json(list);
}

//Controller to Update a list:
const updateList = async (req,res) => {
    const {id}  = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
        {
            return res.status(404).json({error:"Improperly formatted ID!"});
        }
    
    const list = await Note.findOneAndUpdate({_id:id},{...req.body});
    if(!list)
        {
            return res.status(400).json({error:"No note matching the 'id'!"});
        }
    //doesn't return the updated list. It returns the 'list' note item as it was before being..
    //..updated.
    res.status(200).json(list);
}

module.exports= {createLists,getLists,getList,updateList,deleteList}