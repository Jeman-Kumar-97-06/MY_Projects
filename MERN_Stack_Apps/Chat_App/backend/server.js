require('dotenv').config();
const express = require('express');
const app     = express();
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use('/api/auth',authRoutes);
app.use('/api/messages',messageRoutes);

app.listen(PORT,()=>{console.log(`Server running at ${PORT}`)});