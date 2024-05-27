const exp     = require('express');
const mong    = require('mongoose');
const app     = exp();
const dicturl = "https://api.dictionaryapi.dev/api/v2/entries/en/";
let word

app.set('view engine','ejs');

app.use(exp.urlencoded({extended:true}))
app.use(exp.static('public'));

app.listen(3000,()=>{
    console.log("listening at port 3000")
});

app.get('/',(req,res)=>{
    res.render('results',{word_s:'Search Dictionary',results:undefined})
})

app.post('/',(req,res)=>{
    word = req.body.name;
    fetch(dicturl+word.toLowerCase()).then((resp)=>{
        return resp.json();
    }).then(data=>{
        res.render('results',{word_s:"Meanings for : "+word[0].toUpperCase()+word.slice(1).toLowerCase(),results:data})
    })
})



