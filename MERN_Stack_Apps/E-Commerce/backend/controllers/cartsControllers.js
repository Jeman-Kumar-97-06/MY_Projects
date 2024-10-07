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

const createCart = async (req,res) => {
    const {pt} = req.body
    const m_key = Object.keys(pt)[0]
    const exists = await Carts.findOne({user_id:req.user._id});
    if (exists){
        //Array of all products Ex:[{Dune:1},{Ender's Game:3}]
        const old_prod = exists.products;
        let found    = false;
        for (let i = 0; i < old_prod.length; i++) {
            const element = old_prod[i];
            const key     = Object.keys(element)[0]
            if (m_key == key){
                old_prod[i][m_key] += pt[m_key];
                found = true;
            }
        }
        if (!found){
            old_prod.push(pt)
        }
        const cart_to_patch = await Carts.findOneAndUpdate({user_id:req.user._id},{products:old_prod});
        res.status(200).json(cart_to_patch);
    }
    else {
        const new_cart = await Carts.create({products:[pt],user_id:req.user._id})
        res.status(200).json(new_cart);
    }
}

module.exports = {getCart,createCart};
