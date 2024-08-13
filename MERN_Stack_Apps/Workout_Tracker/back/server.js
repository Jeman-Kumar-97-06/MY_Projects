require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app     = express();


//Route Handler 
app.get('/',(req,res)=>{
    res.json({mssg:"Welcome to the app"})
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening at ${process.env.PORT}`);
});
 
