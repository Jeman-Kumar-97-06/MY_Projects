const mongoose = require('mongoose');
const Carts    = require('../models/cartModel');
const Product  = require('../models/productModel');
const User     = require('../models/userModel');
const jwt      = require('jsonwebtoken');

//Get cart items by user_id:--
const getCart = async (req,res) => {
    const user_id = req.params;
    const cart    = await Carts.find({user_id:user_id}).sort({createdAt:-1});
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"The ID is Invalid!"});
    }
    if (!cart){
        return res.status(404).json({error:"No Cart with the give ID!"});
    }
    res.status(200).json(cart)
}

const createCart = async (req,res) => {
    const {pt} = req.body
    // const exists = await Carts.findOne({user_id:req.user._id});
    // if (exists){
    //     const old_prod = exists.products;
    // }
    // else {
    //     const new_cart = await Carts.create({products:[],user_id:req.user._id})
    // }
}

module.exports = {getCart,createCart};
