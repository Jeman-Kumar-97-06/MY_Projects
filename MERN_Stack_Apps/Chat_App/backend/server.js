require('dotenv').config()
const express = require('express');
const app     = express();
const authRoutes = require('./routes/authRoutes')
const msgRoutes = require('./routes/msgRoutes');
const sideBarRoutes = require('./routes/sbRoutes');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors')
const PORT    = process.env.PORT || 4000

app.use(express.json());//to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use(cors());
app.use('/api/auth',authRoutes);
app.use('/api/message',msgRoutes);
app.use('/api/sbusers',sideBarRoutes);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("Connected to Database and Listening for requests at "+process.env.PORT)});
}).catch(error=>{console.log(error)})