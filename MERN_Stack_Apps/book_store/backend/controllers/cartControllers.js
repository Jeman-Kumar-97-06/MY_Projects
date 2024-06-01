const CartModel = require('../models/cartModel');

const getAllCartItems = async (req,res) => {
    const items = await CartModel.find({}).sort({createdAt:-1});
    res.status(200).json(items)
}

const createCartItem = async (req,res) => {
    const {book_id,user_email} = req.body;
    try
    {
        const cartitem = await CartModel.create({book_id,user_id});
        res.status(200).json(cartitem);
    }
    catch(err)
    {   
        res.status(400).json({error:err.message});
    }
}

module.exports = {getAllCartItems,createCartItem};





















