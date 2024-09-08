require('dotenv').config();

const mongoose = require('mongoose');

const express = require('express');

//Creating express app.
const app     = express();

//middleware to receive request body as json and not as 'undefined':
app.use(express.json());

const workoutRoutes = require('./routes/workouts');

//Route Handlers:
app.use('/api/workouts', workoutRoutes);


//Listening for requests.
mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(
        `Listening at ${process.env.PORT}`
    )})
}).catch(err=>{console.log(err)})
