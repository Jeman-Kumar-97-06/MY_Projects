const express = require('express');
const mong    = require('mongoose');
const app     = express();
const NormNote = require('./models/normal_note');
const dbUri   = "mongodb+srv://mrj06031997:yUU73fcquguPC3Su@netninjacluster.vih7jsc.mongodb.net/note-tuts?retryWrites=true&w=majority";
app.set('view engine','ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));
mong.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true}).then(result=>{
    console.log('connected successfully to database');
    app.listen(3000,()=>{console.log('listening at 3000')});
}).catch(err=>{
    console.log(err);
})

app.get('/',(req,res)=>{
    NormNote.find().then((result)=>{
        res.render('index',{all_notes:result})
    }).catch(err=>{
        console.log(err)
    })
})

app.get('/create-note',(req,res)=>{
    res.render('create');
})

app.get('/create-list',(req,res)=>{
    res.render('create_list');
})

//Add new notes
app.post('/notes-normal',(req,res)=>{
    const newNote = new NormNote(req.body);
    newNote.save().then(()=>{
        res.redirect('/');
    }).catch(err=>{
        console.log(err)
    })
})


app.post('/notes-list',(req,res)=>{
    console.log(req.body);
})