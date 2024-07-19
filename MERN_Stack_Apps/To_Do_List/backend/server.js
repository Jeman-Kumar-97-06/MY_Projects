require('dotenv').config();

const exp      = require('express');
const app      = exp();
const mongoose = require('mongoose');
const cors     = require('cors');

const todolistRoutes = require('./routes/todolistRoutes');

app.use(cors());
app.use(exp.json());

app.use(express.urlencoded({extended:true}));

app.use('/api/todolists',todolistRoutes);

mongoose.connect(process.env.MONGOURL).then(()=>{app.listen(process.env.PORT,()=>{console.log(`Listening at ${process.env.PORT}`)})}).catch(err=>{console.log(err)});