const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d2c067f6566bb0ca2720c9aca11da2d8';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        console.log(jsObject);

        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('wind').textContent = jsObject.wind.speed;
        document.getElementById('pressure').textContent = jsObject.main.pressure;
        document.getElementById('currently').textContent = jsObject.weather[0].description;


    });

const apiURL1 = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=d2c067f6566bb0ca2720c9aca11da2d8';

fetch(apiURL1)
    .then((response) => response.json())
    .then((jsObject) => {

        const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

        console.log(forecast);

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


window.onload = windChill;

function windChill() {
    let tempF = parseFloat(document.getElementById('highTemp').value);
    let speed = parseFloat(document.getElementById('wind').value);
    if (tempF <= 50.0 && speed > 3.0) {
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
        document.getElementById('windCh').innerHTML = rnd(f, 1);
    } else {
        document.getElementById('windCh').innerHTML = "N/A";
    }
}