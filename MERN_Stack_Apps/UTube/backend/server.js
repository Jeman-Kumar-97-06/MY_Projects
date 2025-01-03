require('dotenv').config();

const express     = require('express');
const app         = express();
const mongoose    = require('mongoose');
const cors        = require('cors');

const videoRoutes = require('./routes/videoRoutes');
const userRoutes  = require('./routes/userRoutes');

//Used to Enable CORS in Express App.
app.use(cors());
//Used to access req.body as JSON object.
app.use(express.json());

//Middleware
app.use('/api/videos',videoRoutes);
app.use('/api/users',userRoutes);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("Request Listening At a PORT")})
                                                }).catch(err=>{
                                                        console.log(err)
                                                                });