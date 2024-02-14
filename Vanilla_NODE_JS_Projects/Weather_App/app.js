const exp  = require('express');
const app  = exp();
app.set('view engine','ejs');
api_url    = 'http://api.weatherapi.com/v1/forecast.json?key=86a6946ec337426ca5770418231109&days=3&q='
app.listen(3000);
app.use(exp.static('public'))
app.use(exp.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/test',(req,res)=>{
    res.render('weather_report')
})
app.post('/get_weather_data',(req,res)=>{
    let location = req.body.location_;
    fetch(api_url+location).then(resp=>{
        return resp.json();
    }).then(data=>{
        const {name:name_of_loc,region:reg_n,country} = data.location;
        const {temp_c,temp_f,condition:{text:about_current_weather,icon:weather_icon,code}} = data.current;
        const {forecastday} = data.forecast
        let list_of_co      = [];
        for (var x = 0;x++;x<forecastday.length){
            let listx = [];
            for (var y = 0;y++;y<forecastday[x].hour.length){
                listx.push([forecastday[x].hour[y]['temp_f'],y])
            }
            
            list_of_co.push(listx)
        }
        console.log(list_of_co.length)
        console.log(list_of_co[0])
    })
})
