require('dotenv').config();
const express = require('express');
const app     = express();
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors())

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("Connected to Database and listening at ",process.env.PORT)})
});