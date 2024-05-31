const BookModel = require('../models/bookModel');

const getAllBooks = async (req,res) => {
    const books = await BookModel.find({}).sort({createdAt:-1});
    res.status(200).json(books);
}

module.exports = {getAllBooks};