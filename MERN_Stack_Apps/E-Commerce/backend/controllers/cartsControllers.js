const mongoose = require('mongoose');
const Carts    = require('../models/cartModel');
const Product  = require('../models/productModel');

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

module.exports = {getCart};
