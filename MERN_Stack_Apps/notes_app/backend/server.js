const express = require('express');

//creating express app:
const app     = express();

//routes:
app.get('/',(req,res)=>{
    res.json({mssg:"Welcome to the app!"});
})

//listening to requests:
app.listen(4000,()=>{console.log('Listening to requests at 4000')});

