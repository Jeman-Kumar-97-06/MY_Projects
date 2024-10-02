const Post     = require('../models/postModel');
const User     = require('../models/usersModel');
const mongoose = require('mongoose');

//Function to get all posts no matter who the user is:
const getPosts = async (req,res) => {
    const posts = await Post.find().sort({createdAt:-1});
    res.status(200).json(posts);
}

//Function to get logged in user's posts:
//We are going to get his id from the request body.
const getMyPosts = async (req,res) => {
    const user_id = req.user._id;
    const myPosts = await Post.find({_id:user_id}).sort({createdAt:-1});
    res.status(200).json(myPosts);
}

//Function to get another user's posts:
//The client is going to search him/her by name:
//We use the name to find the user and get his/her id:
const getAnotherUserPosts = async (req,res) => {
    const user_name = req.params;
    const user      = await User.find({name:user_name});
    const thatPosts = await Post.find({_id:user._id}).sort({createdAt:-1});
    res.status(200).json(thatPosts);
}


const getPost = async (req,res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"Invalid ID!"})
    }

    const post = await Post.findById(id);
    if (!post) {
        return res.status(404).json({error:"No Post matching the ID!"});
    }
    res.status(200).json(post);
}

const createPost = async (req,res) => {
    const {body,img} = req.body;
    try {
         const user_id = req.user._id;
         const new_post= await Post.create({body,img,usr:user_id})
         res.status(200).json(new_post);
    } catch (error) {
         res.status(400).json({error:error.message});
    }
}

const deletePost = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"Invalid ID!"})
    }
    const post_to_del = await Post.findOneAndDelete({_id:id});
    if (!post_to_del) {
        return res.status(404).json({error:"No Post with the matching ID!"})
    }
    res.status(200).json(post_to_del);
}

const updatePost = async (req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"Invalid ID!"});
    }
    const post_to_update = await Post.findOneAndUpdate({_id:id},{...req.body})
    if (!post_to_update) {
        return res.status(404).json({error:"No Post with the matching ID!"});
    }
    res.status(200).json(post_to_update);
}

module.exports = {getPosts,getMyPosts,getAnotherUserPosts,getPost,createPost,deletePost,updatePost};