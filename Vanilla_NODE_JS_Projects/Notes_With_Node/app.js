const express = require('express');
const mong    = require('mongoose');
const app     = express();
const dbUri   = "mongodb+srv://mrj06031997:yUU73fcquguPC3Su@netninjacluster.vih7jsc.mongodb.net/?retryWrites=true&w=majority";
app.set('view engine','ejs');
app.use(express.static('public'))
mong.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true}).then(result=>{
    console.log('connected successfully to database');
    app.listen(3000,()=>{console.log('listening at 3000')})
}).catch(err=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    res.render('create')
})