const express = require('express');
const mong    = require('mongoose');
const obj_id  = require('mongodb').ObjectId;
const app     = express();
const NormNote = require('./models/normal_note');
const ListNote = require('./models/list_note');
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
    let all_result = [];
    NormNote.find().then(result=>{
        result.forEach(item=>{all_result.push(item)});
        return ListNote.find();
    }).then((result)=>{
        result.forEach(item=>{all_result.push(item)});
        res.render('index',{all_notes:all_result})
    }).catch(err=>{
        console.log(err)
    });
})

app.get('/notes-normal/:id',(req,res)=>{
    const id = new obj_id(req.params.id);
    NormNote.findById({_id:id}).then(result=>{
       res.render('x_note',{rss:result})
    }).catch(err=>{
        console.log(err)
    })
})

// app.get('/notes-list/:id',(req,res)=>{
//     const id = req.params.id;
//     ListNote.findById(id).then(result=>{
//         res.render("each_note",{the_note:result})
//     }).catch(err=>{
//         console.log(err)
//     })
// })

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

//Add new List notes
app.post('/notes-list',(req,res)=>{
    const newList = new ListNote(req.body);
    newList.save().then(()=>{
        res.redirect('/');
    }).catch(err=>{
        console.log(err);
    })
})

app.get('/about',(req,res)=>{
    res.render('about')
})