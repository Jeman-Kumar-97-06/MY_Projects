require('dotenv').config();

const exp      = require('express');
const app      = exp();

const prodRout = require('./routes/products');

const mongoose = require('mongoose');
const cors     = require('cors');

app.use(exp.json());
app.use(cors());

app.use('/api/products',prodRout);

mongoose.connect(process.env.MONGOURL)
    .then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log(`listening at ${process.env.PORT}`)
                                        })
              })
            .catch(err=>{console.log(err)})