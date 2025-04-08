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
    return res.status(200).json(resps);
};

const updateCart = async (req,res) => {
    //Item sent to be added to the cart : 
    console.log(req.body);
    return;
    const item_in_req = req.body;
    console.log(item_in_req);
    //Existing Items in Cart : 
    const items_obj = await Cart.findOne({user_id:req.user._id});
    const old_items = items_obj.products;
    //Find the matching item and replacing it with the updated item sent by user:
    for (let i= 0;i<old_items.length;i++) {
        if (old_items[i]['prod_name'] === item_in_req.prod_name) {
            old_items[i] = item_in_req;
        }
    }
    const updated_cart = await Cart.findOneAndUpdate({user_id:req.user._id},{products:old_items});
    return res.status(200).json("updated successfully!");
}

const createCart = async (req,res) => {
    //The request body : example:{Dune :3}
    const {prods}  = req.body;
    const userID   = req.user._id;
    const prodName = Object.keys(prods)[0];
    const prod_pri = await Product.findOne({name:prodName}).select('price');
    //See if the user cart already exists : 
    const exists   = await Cart.findOne({user_id:userID});
    //Object to save inside the cart:
    const item     = {};
    item.name      = prodName;
    item.quantity  = Number(Object.values(prods)[0]);
    item.price     = prod_pri.price;
    //now save the item in the Database :
    //If the cart already exists : 
    if (exists) {
         //Array of all products Ex:[{Dune:1},{Ender's Game:3}]
        const old_prod = exists.products;
        let found    = false;
        //Loop through each product to see if the product name of the sent item exists:
        for (let i = 0; i < old_prod.length; i++) {
            const element = old_prod[i];
            const key     = element.name;
            if (key === prodName){
                element.quantity += Number(prods[prodName]);
                found = true;
            }
        }
        if (!found){
            old_prod.push(item)
        }
        const cart_to_patch = await Cart.findOneAndUpdate({user_id:userID},{products:old_prod});
        return res.status(200).json(cart_to_patch);
    } else {
        const new_cart = await Cart.create({products:[item],user_id:userID})
        return res.status(200).json(new_cart);
    }
}

module.exports = {getCart,updateCart,createCart};