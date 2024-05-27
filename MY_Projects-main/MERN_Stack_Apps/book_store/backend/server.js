require('dotenv').config();//Used to access values defined in '.env' file.
const express  = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/books')
const userRoutes = require('./routes/users');
//Express App :-
const app = express();

//Middleware :-
app.use(express.json()); //U can't access FORM data that comes with post request, without this.

app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//Route Handlers :-
app.use('/book_s',bookRoutes);
app.use('/book_s/user',userRoutes);
//app.get('/',(req,res)=>{
//    res.json({mssg:'Welcome to the app'});
//})

//connecting to the DB on cloud
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Listening on port ${process.env.PORT}`)});
}).catch(err=>{console.log(err)});