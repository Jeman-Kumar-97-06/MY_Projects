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
    const resps = cart[0].products
    res.status(200).json({resps})
}

//Add a Product to the user's cart:--
const createCart = async (req,res) => {
    //The request body : example : {Dune : 3}
    const {pt} = req.body
    console.log(pt)
    //The id of the user who sent the request
    const user_id = req.user._id;
    //Name of the Product:
    const m_key = Object.keys(pt)[0]
    //Quantity of the Product:
    const quan  = pt[m_key];
    //The Price of the Product:
    const price = await Product.findOne({title:m_key}).select("price");

    //Boolean value of whether the user's cart exists
    const exists = await Carts.findOne({user_id:req.user._id});
    const c_item = {};
    c_item.prod_name = m_key;
    c_item.quantity  = quan;
    c_item.price     = price.price;
    //If user's cart with atleast one item exists.
    if (exists){
        //Array of all products Ex:[{Dune:1},{Ender's Game:3}]
        const old_prod = exists.products;
        let found    = false;
        //Loop through each product to see if the product name of the send item exists:
        for (let i = 0; i < old_prod.length; i++) {
            const element = old_prod[i];
            const key     = element.prod_name;
            console.log(key)
            if (m_key == key){
                console.log(pt[m_key])
                element.quantity += pt[m_key];
                found = true;
            }
        }
        if (!found){
            old_prod.push(c_item)
        }
        const cart_to_patch = await Carts.findOneAndUpdate({user_id:req.user._id},{products:old_prod});
        res.status(200).json(cart_to_patch);
    }
    //If user's cart doesn't exist
    else {
        const new_cart = await Carts.create({products:[c_item],user_id:req.user._id})
        res.status(200).json(new_cart);
    }
}

module.exports = {getCart,createCart};
