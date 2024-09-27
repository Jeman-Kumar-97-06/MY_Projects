const Post     = require('../models/postModel');
const mongoose = require('mongoose');

//controller to get all posts
const getPosts = async (req,res) => {
    const all_posts = await Post.find().sort({createdAt:-1});
    res.status(200).json(all_posts);
}

//contoller to get a post
const getPost = async (req,res) => {
    const {post_id} = req.params;
    const post      = await Post.findById(post_id);
    if(!mongoose.Types.ObjectId.isValid(post_id)){
        return res.status(404).json({error:"The ID is Invalid!"})
    }
    if(!post){
        return res.status(404).json({error:"No matching POST found with the specfied ID!"});
    }
    res.status(200).json(post);
}

//controller to create a post
const createPost = async (req,res) => {
    const {post_body,post_image,post_usr,post_usr_img} = req.body;
    try{
        const new_post  = await Post.create({post_body,post_image,post_usr,post_usr_img});
        res.status(200).json(new_post);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

//controller to delete a post
const delPost = async (req,res) => {
    const {post_id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(post_id)) {
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const deleted_post = await Post.findOneAndDelete({_id:post_id});
    if (!post) {
        return res.status(404).json({error:"No Matching Post found with the given ID!"})
    }
    res.status(200).json(deleted_post);
}

//controller to patch a post
const patchPost = async (req,res) => {
    const {post_id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(post_id)) {
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    const updated_post = await Post.findOneAndUpdate({_id:post_id},{...req.body})
    if (!post) {
        return res.status(404).json({error:"No Matching Post found with the given ID!"})
    }
    res.status(200).json(updated_post)
}

module.exports = {getPosts,getPost,createPost,delPost,patchPost};