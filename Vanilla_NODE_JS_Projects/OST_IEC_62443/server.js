const express = require('express');
const cors        = require('cors');
const app     = express();
const questions_data = require('./data/questionare.json');
const assets_data = require('./data/Nodes list_Paint Shop.json');
const cve_data = require('./data/CVE Table.json');
const dat_for_324 = require('./data/3.2.4.json');
const dat_for_327 = require('./data/3.2.7.json');
const dat_for_3212 = require('./data/3.2.12.json');
const dat_for_all_versions = require('./data/all_versions.json');

const cv_obj = {"324" : dat_for_324,"327" : dat_for_327,"3212":dat_for_3212};

app.use(express.static('css_f'));

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
    let cou = [];
    let obje  = {};
    for (let i = 0; i < assets_data.length; i++) {
        if (!cou.includes(assets_data[i]['Column2']) && (assets_data[i]["Column2"]!=='-' && assets_data[i]['Column2']!=='mac_address')){
            cou.push(assets_data[i]['Column2']);
        }
        if (!obje.hasOwnProperty(assets_data[i]['Column5']) && (assets_data[i]['Column5']!=="'-" && assets_data[i]['Column5']!=='type')){
            obje[assets_data[i]['Column5']] = 0;
        }
    }
    for (let k = 0; k < assets_data.length; k++) {
        if (obje.hasOwnProperty(assets_data[k]['Column5'])){
            obje[assets_data[k]['Column5']] += 1;
        }
    }
    console.log(obje);
    res.render('assets_rend.ejs',{data:assets_data,count:cou.length,type_c:obje});
})

app.get('/cve',(req,res)=>{
    var obbj = {}
    for (let i = 0; i < dat_for_all_versions.length; i++) {
        if (!obbj.hasOwnProperty(dat_for_all_versions[i]['cwe_name'])){
            obbj[dat_for_all_versions[i]['cwe_name']] = 1;
        } 
        else{
            obbj[dat_for_all_versions[i]['cwe_name']] += 1;
        }
     }
    res.render('cve.ejs',{data:cve_data,name:'jeman',all_ver_dat_k:Object.keys(obbj),all_ver_dat_v:Object.values(obbj)});
})

app.get('/cv/:version',(req,res)=>{
    const version = req.params.version;
    const v       = version.slice(1,version.length).split('.').join('');
    res.render('cv.ejs',{data:cv_obj[v]});
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