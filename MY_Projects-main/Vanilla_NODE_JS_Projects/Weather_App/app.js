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

app.post('/get_weather_data',(req,res)=>{
    let location = req.body.location_;
    fetch(api_url+location).then(resp=>{
        return resp.json();
    }).then(data=>{
        const {name:name_of_loc,region:reg_n,country} = data.location;
        const {temp_c,temp_f,condition:{text:about_current_weather,icon:weather_icon,code},wind_kph,humidity} = data.current;
        const {forecastday} = data.forecast
        let day0      = forecastday[0].hour;
        let day1      = forecastday[1].hour;
        let day2      = forecastday[2].hour;

        const getCoOr = (x)=>{
            let co_Or = []
            day0.forEach((item)=>{
                    co_Or.push([item.temp_f])
                                 })
            return co_Or;        
                        }
    
        let day0_coOr = getCoOr(day0);
        let day1_coOr = getCoOr(day1);
        let day2_coOr = getCoOr(day2);


        let time = '';
        let dat  = new Date();
        let hrs  = dat.getHours();
        let miSt = dat.getMinutes(); 
        let hrSt = ''
        let am_or_pm = '';
        if(hrs>=12){
            time = String(Math.abs(12-hrs))+':'+String(miSt)+' PM'
        }
        else{
            time = String(hrs)+":"+String(miSt)+" AM, IST"
        }
        res.render('weather_report',{
                            loc:name_of_loc,
                            temp_f:temp_f,
                            icon:weather_icon,
                            humid:humidity,
                            wind_kph:wind_kph,
                            fc_d : forecastday,
                            time :time,
                            day0_c: day0_coOr,
                            day1_c: day1_coOr,
                            day2_c: day2_coOr
                                    });
    })
})
