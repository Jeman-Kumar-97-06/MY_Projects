const mongoose = require('mongoose');
const Carts    = require('../models/cartModel');
const Product  = require('../models/productModel');
const jwt      = require('jsonwebtoken');
const _        = require('lodash');

//Get cart items by user_id:--
const getCart = async (req,res) => {
    const cart    = await Carts.find({user_id:req.user._id});
    if (!cart){
        return res.status(404).json({error:"No Cart with the give ID!"});
    }
    const all_prods = cart[0].products;
    const prices    = {};
    for (let i = 0; i < all_prods.length; i++) {
        const element = Object.keys(all_prods[i])[0];
        const price   = await Product.findOne({title:element}).select("price");
        prices[element] = price.price;
    }
    res.status(200).json({cart,prices})
}

//Add a Product to the user's cart:--
const createCart = async (req,res) => {
    const {pt} = req.body
    console.log(pt)
    
}

module.exports = {getCart,createCart};
