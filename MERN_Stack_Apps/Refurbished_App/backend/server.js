require('dotenv').config();
const cors     = require('cors');
const express  = require('express');
const mongoose = require('mongoose');
const app      = express();

const uRts     = require('./routes/users');
const cRts     = require('./routes/carts');
const pRts     = require('./routes/products');

app.use(express.json());
app.use(cors());


app.use('/api/users',uRts);
app.use('/api/carts',cRts);
app.use('/api/products',pRts);

mongoose.connect(process.env.MONGOURL).then(()=>{
  app.listen(process.env.PORT,()=>{console.log("Connected to database and listening to request at ",process.env.PORT)})
}).catch(error=>{console.log(error)})
