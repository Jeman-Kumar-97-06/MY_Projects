require('dotenv').config();
const express = require('express');
const app     = express();

const PORT = process.env.PORT || 4000;
 
app.get('/api/auth/signup',(req,res)=>{
    console.log
})

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{console.log(`Server running at ${PORT}`)});