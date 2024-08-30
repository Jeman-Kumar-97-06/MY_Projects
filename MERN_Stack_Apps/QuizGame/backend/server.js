require('dotenv').config();

const cors       = require('cors');
const express    = require('express');
const app        = express();
const mongoose   = require('mongoose')

const quesRoutes = require('./routes/quesRoutes');

app.use(express.json());
app.use(cors());

app.use('/api/questions',quesRoutes);

mongoose.connect(process.env.MONGOURL).then(
            ()=> {
                app.listen(process.env.PORT,()=>{console.log(`Connected to Database and Listening at ${process.env.PORT}`)})
                 }
                                            ).catch(err=>{console.log(err)});