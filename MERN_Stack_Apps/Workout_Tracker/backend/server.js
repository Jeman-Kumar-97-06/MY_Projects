require('dotenv').config();

const mongoose = require('mongoose');

const express = require('express');

//Creating express app.
const app     = express();

//middleware to receive request body as json and not as 'undefined':
app.use(express.json());

//Import Routes for workouts
const workoutRoutes = require('./routes/workouts');
//Import Routes for users
const userRoutes    = require('./routes/users');

//Route Handler for Workouts:
app.use('/api/workouts', workoutRoutes);
//Route Handler for Users:
app.use('/api/users',userRoutes);

//Listening for requests.
mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(
        `Listening at ${process.env.PORT}`
    )})
}).catch(err=>{console.log(err)})
