const express = require('express');
const app     = express();
const dbUri   = "mongodb+srv://mrj06031997:yUU73fcquguPC3Su@netninjacluster.vih7jsc.mongodb.net/?retryWrites=true&w=majority";
app.set('view engine','ejs');
app.use(express.static('public'))
app.listen(3000,()=>{
    console.log('listening at 3000');
});
app.get('/',(req,res)=>{
    res.render('index')
})