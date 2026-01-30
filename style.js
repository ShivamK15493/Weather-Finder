// Development in progress

let output = document.getElementById("res");
let temp = document.getElementById("hea");
let area = document.getElementById("cit");
let feels = document.getElementById("fee");
let airspeed = document.getElementById("win");
let humidit = document.getElementById("hum");
let pressu = document.getElementById("pre");
let Datee = document.getElementById("dat");
let City;

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=13660680d54f64f76512920e5368ba37&units=metric
// https://api.weatherapi.com/v1/current.json?key=3e99949c23084d3dbba152652253112&q=delhi

async function getFacts()
{
     City = document.getElementById("search").value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=13660680d54f64f76512920e5368ba37&units=metric`;
   
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
     console.log(data.main)
    const cityName = data.name; 
    const temperature = data.main.temp;
    const feelsLike = parseInt(data.main.feels_like);
   //  const min = data.main.temp_min;
   //  const max = data.main.temp_max;
    const Humidity = data.main.humidity;
    const Pressur = data.main.pressure;
    const windspeed = data.wind.speed;
    const Longitude = data.coord.lon;
    const Latitude = data.coord.lat;
     
    temp.innerText=`${temperature}°C`;
    area.innerText=`${cityName}`;
    feels.innerText=`${feelsLike}°C`;
    airspeed.innerText=`${windspeed}Km/h`;
    humidit.innerText=`${Humidity}%`;
    pressu.innerText=`${Pressur}hPa`;

    realDate();
}

function realDate()
{
  let d = new Date();

  const MonthsName = [
    "Jan","Feb","Mar","Apr","May",
    "June","July","Aug","Sept","Oct",
    "Nov","Dec"
  ]
  
  let dates = d.getDate();
  let Months = MonthsName[d.getMonth()];
  let Yearr = d.getFullYear();

  Datee.innerText=`${dates} ${Months} ${Yearr}`;
}
