require('dotenv').config();
const express = require('express');
const cors    = require('cors');

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

app.listen(process.env.PORT,()=>{
    console.log(`Listening at ${process.env.PORT}`);
});
 
