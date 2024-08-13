require('dotenv').config();
const express = require('express');
const cors    = require('cors');

const app     = express();

//Route Handler 
app.get('/',()=>{
    
})

app.listen(4000,()=>{
    console.log('Listening at 4000');
});
 
