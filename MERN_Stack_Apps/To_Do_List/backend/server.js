require('dotenv').config();

const exp      = require('express');
const app      = exp();
const mongoose = require('mongoose');
const cors     = require('cors');

const todolistRoutes = require('./routes/todolistRoutes');
const userRoutes     = require('./routes/userRoutes');

app.use(cors());
app.use(exp.json());

// app.use(exp.urlencoded({extended:true}));

app.use('/api/todolists',todolistRoutes);
app.use('/api/users',userRoutes);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Listening at ${process.env.PORT}`)})
}).catch(err=>{console.log(err)});