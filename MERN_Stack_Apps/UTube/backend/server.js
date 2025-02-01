require('dotenv').config();
const express   = require('express');
const mongoose  = require('mongoose');
const cors      = require('cors');
const vidRoutes = require('./routes/videos');
const usrRoutes = require('./routes/auth');

const app       = express();

app.use(cors({
    origin : "http://localhost:5173",
    methods : ["GET","POST","PUT","DELETE"],
    allowedHeaders : ["Content-Type","Authorization"]
}));
app.use(express.json());


app.use('/uploads',express.static('uploads'));

//Using usrRoutes : 
app.use('/api/users',usrRoutes);

//Using vidRoutes : 
app.use('/api/videos',vidRoutes);

mongoose.connect(process.env.MONGOURL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("Connected to DB and listening to requests")})
}).catch(error=>{console.log(error)})

