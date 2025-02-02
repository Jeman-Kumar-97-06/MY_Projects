require('dotenv').config();

const cors = require('cors');
const exp  = require('express');
const app  = exp();
const mong = require('mongoose');

const noteRoutes = require('./routes/noteRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(exp.json());
app.use(cors());

app.use('/api/notes',noteRoutes);
app.use('/api/users',userRoutes);

mong.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log(`Connected & Listening at ${process.env.PORT}`)});
}).catch(err=>{console.log(err)});