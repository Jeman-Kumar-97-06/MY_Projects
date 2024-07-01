const CartModel = require('../models/cartModel');
const BookModel = require('../models/bookModel');

const getAllCartItems = async (req,res) => {
    const {id:u_id}        = req.params;
    //getting book_ids from cart db
    const cart_items_books = await CartModel.find({user_id:u_id}).sort({createdAt:-1});
    //getting book names and prices:
    let books_in_cart    = [];
    for (let i = 0; i < cart_items_books.length; i++) {
        let x = await BookModel.findById(cart_items_books[i].book_id).sort({createdAt:-1})
        let t = x.title;
        let p = x.price;
        books_in_cart.push({title:t,price:p})
      } 
    res.status(200).json(books_in_cart)
}

const createCartItem = async (req,res) => {
    const {userid_yo:user_id,x:book_id} = req.body;
    
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





















