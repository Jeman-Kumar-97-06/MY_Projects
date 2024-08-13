//server.js acts as an API between DB and Client


require('dotenv').config();
const express = require('express');
const cors    = require('cors');
const mongoose = require('mongoose');

const workoutRoutes = require('./routes/workouts');

const app     = express();

//Middleware to accept req body in the form of json
//[If you don't use this, req body submitted will be undefined]
app.use(express.json());

//API Endpoints :--
//GET   /workouts       Gets all workouts 
//POST  /workouts       Creates a new workout
//GET   /workout/:id    Gets a single workout
//DEL   /workout/:id    Deletes a single workout
//PATCH /workout/:id    Updates a single workout

//Route Handler 
app.use('/api/workouts',workoutRoutes)

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Connected to DB & listening at ${process.env.PORT}`);
    })
}).catch(err=>{console.log(err)})
 
