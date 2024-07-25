require('dotenv').config();

const exp      = require('express');
const app      = exp();
const mongoose = require('mongoose');
const cors     = require('cors');

//importing routes
const notesR   = require('./routes/notesRoutes');

app.use(cors());
app.use(exp.json());

//using routes
app.use('/api/notes',notesR);

//Connecting to DB and listening to requests
mongoose.connect(process.env.MONGOURL)
    .then(()=>{app.listen(process.env.PORT,()=>{console.log(`Listening at ${process.env.PORT}`)})})
        .catch(err=>{console.log(err)});
