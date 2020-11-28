function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}

let today = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentWeekday = days[today.getDay()];

let date = today.getDate();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = months[today.getMonth()];

let currentYear = today.getFullYear();

document.getElementById("todaysDate").innerHTML = currentWeekday + ", " + date + " " + currentMonth + " " + currentYear;

let d = today.getDay()

if (d == 5) {
    document.getElementById("pancakesFriday").style.display = "block";
}

let imagesToLoad = document.querySelectorAll('img[data-src]');
const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};


if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    });

    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {

                let card = document.createElement('article');
                let img = document.createElement('img');
                let div = document.createElement('div');
                let h2 = document.createElement('h2');
                let motto = document.createElement('p');
                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let annualRainFall = document.createElement('p');

                card.setAttribute('class', 'card');
                img.setAttribute('src', 'images/' + towns[i].photo);
                h2.textContent = towns[i].name;
                motto.textContent = towns[i].motto;
                motto.setAttribute("class", "motto");
                yearFounded.textContent = 'Year Founded:  ' + towns[i].yearFounded;
                population.textContent = 'Population:  ' + towns[i].currentPopulation;
                annualRainFall.textContent = 'Annual Rain Fall:  ' + towns[i].averageRainfall;

                card.appendChild(img);
                card.appendChild(div);
                div.appendChild(h2);
                div.appendChild(motto);
                div.appendChild(yearFounded);
                div.appendChild(population);
                div.appendChild(annualRainFall);

                document.querySelector('section.homeImages').appendChild(card);
            }


        }
    });

fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

            if (towns[i].name == "Fish Haven") {

                let div = document.createElement('div');
                let event1 = document.createElement('p');
                let event2 = document.createElement('p');
                let event3 = document.createElement('p');
                let event4 = document.createElement('p');

                event1.textContent = towns[i].events[0];
                event2.textContent = towns[i].events[1];
                event3.textContent = towns[i].events[2];
                event4.textContent = towns[i].events[3];

                div.appendChild(event1);
                div.appendChild(event2);
                div.appendChild(event3);
                div.appendChild(event4);
                document.querySelector('article.eventsFH').appendChild(div);
            }

        }

    });