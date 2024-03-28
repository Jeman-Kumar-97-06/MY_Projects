require('dotenv').config();
const exp  = require('express');
const workoutRoutes = require('./routes/workouts');
//Creating an express app:
const app  = exp();


//'app.use()' runs when all else fails. So, put it at the bottom.
//If you want to keep it at the top, and still make the next route middlewares run, use 'next()'.
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

//route middlewares:
app.use('/api/workouts',workoutRoutes);



//Listening to requests at 3000:
// !!If there's no route handlers above as in LINE05 the page will display 'Cannot GET/' 
app.listen(process.env.PORT,()=>{console.log('Listening at 3000!')});


//GET    /workouts      --> GETs all workouts
//POST   /workouts      --> Create a new workout
//GET    /workouts/:id  --> GETs a single workout doc
//DELETE /workouts/:id  --> Deletes a single workout doc
//PATCH  /workouts/:id  --> Updates a single workout

