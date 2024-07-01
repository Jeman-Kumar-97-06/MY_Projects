require('dotenv').config();

const express    = require('express');
const mongoose   = require('mongoose');
const noteRoutes = require('./routes/notes');



//creating express app:
const app     = express();

//MIDDLEWARE to accept form data from client side as json. If you don't have the following line...
//... the form data will be recognized as 'undefined'.
app.use(express.json())

//routes:
app.get('/',(req,res)=>{
    res.json({mssg:"Welcome to the app!"});
})

app.use("/notes",noteRoutes);

//Connecting to db & listening to requests:
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Listening to requests at ${process.env.PORT}`)});
}).catch(err=>{console.log(err)});

