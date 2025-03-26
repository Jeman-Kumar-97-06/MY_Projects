const mongoose = require('mongoose');
const Cart     = require('../models/cartModel');
const Product  = require('../models/productModel');
const jwt      = require('jsonwebtoken');

//Get cart by user_id : 
const getCart = async (req,res) => {
    const cart = await Cart.find({user_id : req.user._id});
    if (!cart) {
        return res.status(404).json({error:"No Cart with the given ID!"})
    }
    const resps = cart[0].products;
    return res.status(200).json({resps});
};

const updateCart = async (req,res) => {
    //Item sent to be added to the cart : 
    const item_in_req = req.body;
    console.log(item_in_req);
    // //Existing Items in Cart : 
    // const items_obj = await Cart.findOne({user_id:req.user._id});
    // const old_items = items_obj.products;
    // //Find the matching item and replacing it with the updated item sent by user:
    // for (let i= 0;i<old_items.length;i++) {
    //     if (old_items[i]['prod_name'] === item_in_req.prod_name) {
    //         old_items[i] = item_in_req;
    //     }
    // }
    // const updated_cart = await Cart.findOneAndUpdate({user_id:req.user._id},{products:old_items});
    // return res.status(200).json("updated successfully!");
}

const createCart = async (req,res) => {
    //The request body : example:{Dune :3}
    const {pt} = req.body;
    console.log(pt);
}

module.exports = {getCart,updateCart,createCart};