const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=d2c067f6566bb0ca2720c9aca11da2d8';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

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

const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Preston") {

                let div = document.createElement('div');
                let unolist = document.createElement('ul');
                let event1 = document.createElement('li');
                let event2 = document.createElement('li');
                let event3 = document.createElement('li');

                event1.textContent = towns[i].events[0];
                event2.textContent = towns[i].events[1];
                event3.textContent = towns[i].events[2];

                div.appendChild(unolist);
                unolist.appendChild(event1);
                unolist.appendChild(event2);
                unolist.appendChild(event3);
                document.querySelector('article.eventsP').appendChild(div);

            }

        }

    });