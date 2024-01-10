const exp     = require('express');
const mong    = require('mongoose');
const app     = exp();
app.set('view engine','ejs');
let word
const dicturl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
app.use(exp.urlencoded({extended:true}))

app.listen(3000);
app.get('/',(req,res)=>{
    res.render('home')
})

app.post('/',(req,res)=>{
    word = req.body.name;
    fetch(dicturl+word.toLowerCase()).then((resp)=>{
        return resp.json();
    }).then(data=>{
        res.render('results',{word_s:word[0].toUpperCase()+word.slice(1).toLowerCase(),ress:data[0].word})
    })
})



