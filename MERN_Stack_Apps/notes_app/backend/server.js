//'dotenv' is required to access '.env' files.
require('dotenv').config();

const express     = require('express');
const mongoose    = require('mongoose');
//'./routes/users' have the list of all routes required to deal with users
const userRoutes  = require('./routes/users');
//'./routes/notes' have the list of all routes required to deal with adding/removal/updating notes.
const notesRoutes = require('./routes/notes');

//create app with 'express' package.
const app         = express();

//required to read the request form data as json.
app.use(express.json());

app.use('takenote/notes',notesRoutes);

app.use('takenote/users',userRoutes);

//connecting to mongodb atlas [cloud database]
mongoose.connect(process.env.MONGO_URI).then(()=>{
    app.listen(process.env.PORT,()=>{console.log('connected to db and is now listening at 4000')})
}).catch(err=>{
    console.log(err);
})