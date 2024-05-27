require('dotenv').config();
const express    = require('express');
const mongoose   = require('mongoose');
const userRoutes = require('./routes/users');
//express app:
const app        = express();

//middleware :
app.use(express.json());

app.use('/book_store/users',userRoutes);

mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Listening on port ${process.env.PORT}!`)});
}).catch(err=>{console.log(err)});