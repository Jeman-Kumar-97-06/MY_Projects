require('dotenv').config();
const exp      = require('express');
const app      = exp();
const mongoose = require('mongoose');
const cors     = require('cors');

const userRts  = require('./routes/users');

app.use(cors());
app.use(express.json());

//Let app use wall routes
app.use('/api/walls')

//Let app use user routes
app.use('/api/users',userRts);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Connected to DB and Listening at ${process.env.PORT}`)})
}).catch(error=>{
    console.log(error)
})