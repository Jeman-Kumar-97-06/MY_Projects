const Product = require('./models/productModel');

require('dotenv').config();

const exp      = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
const app      = exp();

app.use(exp.json());
app.use(cors());

const getProds = async (req,res) => {
    const all_notes =await Product.find({}).sort({createAt:-1});
    res.status(200).json(all_notes);
};

app.get('/api/products/',getProds);

//MongoAtlasDB connection
mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Listening at ${process.env.PORT}`)});
}).catch(err=>{console.log(err)});