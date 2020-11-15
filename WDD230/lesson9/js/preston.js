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

        console.table(jsonObject); // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRainFall = document.createElement('p');

        h2.textContent = towns[2].name;
        yearFounded.textContent = towns[2].yearFounded;
        population.textContent = towns[2].currentPopulation;
        annualRainFall.textContent = towns[2].averageRainfall;

        div.appendChild(h2);
        div.appendChild(yearFounded);
        div.appendChild(population);
        div.appendChild(annualRainFall);

        document.querySelector('article.card').appendChild(div);

        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRainFall = document.createElement('p');

        h2.textContent = towns[5].name;
        yearFounded.textContent = towns[5].yearFounded;
        population.textContent = towns[5].currentPopulation;
        annualRainFall.textContent = towns[5].averageRainfall;

        div.appendChild(h2);
        div.appendChild(yearFounded);
        div.appendChild(population);
        div.appendChild(annualRainFall);

        document.querySelector('article.card2').appendChild(div);

        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let annualRainFall = document.createElement('p');

        h2.textContent = towns[6].name;
        yearFounded.textContent = towns[6].yearFounded;
        population.textContent = towns[6].currentPopulation;
        annualRainFall.textContent = towns[6].averageRainfall;

        div.appendChild(h2);
        div.appendChild(yearFounded);
        div.appendChild(population);
        div.appendChild(annualRainFall);

        document.querySelector('article.card3').appendChild(div);
    });