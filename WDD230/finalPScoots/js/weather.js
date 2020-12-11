const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&units=imperial&APPID=d2c067f6566bb0ca2720c9aca11da2d8';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        console.log(jsObject);

        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('wind').textContent = jsObject.wind.speed;
        document.getElementById('humidity').textContent = jsObject.main.pressure;
        document.getElementById('currently').textContent = jsObject.weather[0].description;


    });

const apiURL1 = 'https://api.openweathermap.org/data/2.5/forecast?id=3530103&units=imperial&APPID=d2c067f6566bb0ca2720c9aca11da2d8';

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let day = 0; day < forecast.length; day++) {

            const d = new Date(forecast[day].dt_txt);
            const imageSrc = forecast[day].weather[0].icon;

            document.getElementById(`dayOfWeek${day+1}`).textContent = weekdays[d.getDay()];
            document.getElementById(`imgDay${day+1}`).setAttribute('src', 'http://openweathermap.org/img/wn/' + imageSrc + '.png');
            document.getElementById(`imgDay${day+1}`).setAttribute('alt', forecast[day].weather[0].description);
            document.getElementById(`forecastDay${day+1}`).textContent = forecast[day].main.temp + ' °F';

        }
    });