const Product = require('../models/productModel');
const mongoose = require('mongoose');

const getProducts = async (req,res) => {
    const all_products = await Product.find({}).sort({createAt:-1});
    res.status(200).json(all_products);
}

const getProduct = async (req,res) => {
    const {id}    = req.params;
    const product = await Product.findById(id);
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error:"ID is Invalid!"});
    }
    if (!product){
        return res.status(404).json({error:"No product found with the given id"});
    }
    res.status(200).json(product);
}

const createProduct = async (req,res) => {
    const {prod_name,prod_desc,prod_price,prod_image} = req.body;
    try{
        const new_product = await Product.create({prod_name,prod_desc,prod_price,prod_image});
        res.status(200).json(new_product);
    }
    catch(error){
        return res.status(400).json({error:error.message});
    }
}

module.exports = {getProducts,getProduct,createProduct};