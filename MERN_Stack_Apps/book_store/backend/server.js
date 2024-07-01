require('dotenv').config();
const express    = require('express');
const mongoose   = require('mongoose');
const userRoutes = require('./routes/users');
const bookRoutes = require('./routes/books');
const cartRoutes = require('./routes/cart');
//express app:
const app        = express();

//middleware :
app.use(express.json());

app.use('/book_store/books',bookRoutes);
app.use('/book_store/users',userRoutes);
app.use('/book_store/cart',cartRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Listening on port ${process.env.PORT}!`)});
}).catch(err=>{console.log(err)});