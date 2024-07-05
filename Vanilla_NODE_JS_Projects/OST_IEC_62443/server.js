const express = require('express');
const cors        = require('cors');
const app     = express();
const questions_data = require('./data/questionare.json');
const assets_data = require('./data/Nodes list_Paint Shop.json');

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs'); 

app.get('/',(req,res)=>{
    res.render('index.ejs');
})

app.get('/security_assessment',(req,res)=>{
    res.render('questionaire.ejs',{data:questions_data});
})

app.get('/active_scanner',(req,res)=>{
    res.render('act_scanner.ejs')
})

app.get('/assets',(req,res)=>{
    res.render('assets_rend.ejs',{data:assets_data});
})

app.get('/cve',(req,res)=>{
    res.render('cve.ejs')
})

app.post('/sec_assess_repl',(req,res)=>{
    const plt  = req.body; 
    const kys  = Object.keys(plt);
    const resp = {low:0,medium:0,high:0,critical:0,ignore:0};
    for (var i=0;i<kys.length;i++)
        {
            if(questions_data[i].factor==='Integrity'){
                if(plt[kys[i]]=='not_implemented')
                    {
                        resp.high +=1;
                    }
                else if(plt[kys[i]]=='partially_implemented')
                    {
                        resp.medium += 1;
                    }
                else if(plt[kys[i]]=='implemented')
                    {
                        resp.ignore +=1;
                    }
            }
            else if(questions_data[i].factor==='Availability'){
                if(plt[kys[i]]=='not_implemented')
                    {
                        resp.critical +=1;
                    }
                else if(plt[kys[i]]=='partially_implemented')
                    {
                        resp.medium += 1;
                    }
                else if(plt[kys[i]]=='implemented')
                    {
                        resp.ignore +=1;
                    }
            }
            else if(questions_data[i].factor==='Confidentiality'){
                if(plt[kys[i]]=='not_implemented')
                    {
                        resp.medium +=1;
                    }
                else if(plt[kys[i]]=='partially_implemented')
                    {
                        resp.low += 1;
                    }
                else if(plt[kys[i]]=='implemented')
                    {
                        resp.ignore +=1;
                    }
            }

        }
    res.render('plots.ejs',{total:questions_data.length,low:resp.low,medium:resp.medium,high:resp.high,critical:resp.critical,ignore:resp.ignore});
})

app.listen(3000,()=>{console.log("listening to requests at 3000")});