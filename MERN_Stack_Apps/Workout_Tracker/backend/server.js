const express = require('express');

//Creating express app.
const app     = express();



//Listening for requests.
app.listen(4000,()=>{console.log(
    'listening at 4000'
)})