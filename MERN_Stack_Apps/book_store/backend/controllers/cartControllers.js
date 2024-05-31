const CartModel = require('../models/cartModel');

const getAllCartItems = async (req,res) => {
    const items = await CartModel.find({}).sort({createdAt:-1});
    res.status(200).json(items)
}

module.exports = {getAllCartItems};