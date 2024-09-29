require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');
const app      = express();

app.use(express.json());
app.use(cors());


app.use('/api/posts',pRt);
app.use('/api/users',uRt);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Connected to DB and Listening for requests")
    });
});
