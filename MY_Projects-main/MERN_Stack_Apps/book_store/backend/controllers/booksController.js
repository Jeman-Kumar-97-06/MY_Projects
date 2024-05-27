const Cart          = require('../models/cartModel');
const Book          = require('../models/bookModel');
const mongoose      = require('mongoose');
const uri           = process.env.MONGO_URI;


//GET ALL BOOKS:
const getBooks = async (req,res) => {
  const books = await Book.find({}).sort({createdAt: -1});
  res.status(200).json(books);
}


//GET A SINGLE BOOK/BOOK IN CART AFTER USER LOGGED IN AND CLICKED ON CART:
const getBook = async (req,res) => {
    const {id} = req.params;
    //Type Checking the 'id' to see if it's valid.[ie., checks if the 'id' is of proper format...
    //...not if it matches with any book in the db]
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:"Invalid ID yo!"});
    }
    const cartItem = await Cart.findById(id);
    if(!cartItem)
    {
        return res.status(404).json({error:"No Cart Such Item!"})
    }
    res.status(200).json(cartItem);
}

//GET ALL ITEMS IN CART:
// const getCart = async (req,res) => {
//     const user_id     = req.user._id;
//     const cartItems_u = await Cart.find({user_id}).sort({createdAt:-1});  
//     res.status(200).json(cartItems_u)
// }

//ADD ITEMS TO CART:
//remember to add cartcontext using createContext to update the cart items without refreshing the page
const addToCart = async (req,res) => {
    const {cItem,userID} = req.body;
    try
    {
        const cartItem_added = await Cart.create({cItem,userID});
        res.status(200).json(cartItem_added)
    }
    catch(error)
    {
        res.status(400).json({error:err.message});
    }
}

//DELETE FROM CART:
const deleteCartItem = async (req,res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error:'Not a Valid Type of ID!'})
    }
    const book = await Book.findOneAndDelete({_id:id});
    if(!book)
    {
        return res.status(400).json({error:'No Suck Book!'})
    }
}
module.exports = {getBooks,addToCart,deleteCartItem,getBook};