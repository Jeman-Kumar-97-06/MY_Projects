require('dotenv').config();
const exp  = require('express');
const mongoose = require('mongoose');
const workoutRoutes = require('./routes/workouts');

//Creating an express app:
const app  = exp();
//middleware to access req objects so that we can use it to post/ delete/ patch.[We can't do this by default]
app.use(exp.json());

//'app.use()' runs when all else fails. So, put it at the bottom.
//If you want to keep it at the top, and still make the next route middlewares run, use 'next()'.
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//route middlewares:
app.use('/api/workouts',workoutRoutes);

//Connecting to db:--
mongoose.connect(process.env.MONGO_URI).then(()=>{app.listen(process.env.PORT,()=>{console.log('Connected to DB & Listening at 3000!')});}).catch(err=>{console.log(err)});

//Listening to requests at 3000:
// !!If there's no route handlers above as in LINE05 the page will display 'Cannot GET/' 



//GET    /workouts      --> GETs all workouts
//POST   /workouts      --> Create a new workout
//GET    /workouts/:id  --> GETs a single workout doc
//DELETE /workouts/:id  --> Deletes a single workout doc
//PATCH  /workouts/:id  --> Updates a single workout

