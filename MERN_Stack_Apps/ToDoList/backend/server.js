require('dotenv').config();
const mongoose   = require('mongoose');
const exp        = require('express');
const app        = exp();

const listRoutes = require('./routes/todolists');

app.use(exp.json());

app.use('/api/todolists',listRoutes);

mongoose.connect(process.env.MONGOURL).then(()=>{app.listen(process.env.PORT,()=>{console.log(`Listening at ${process.env.PORT}`)});}).catch((error)=>{
    console.log(error);
});
