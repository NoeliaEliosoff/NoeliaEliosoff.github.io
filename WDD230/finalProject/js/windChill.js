window.addEventListener('DOMContentLoaded', (event) => {
    let currentTemp = document.getElementById('highTemp').innerHTML;
    let temp = Number(currentTemp);

    let windS = document.getElementById('wind').innerHTML;
    let wind = Number(windS);


    if (temp <= 50 && wind > 3) {
        let windChillCalc = 35.74 + (0.6215 * temp) - (35.75 * wind ** 0.16) + (0.4275 * temp * wind ** 0.16);
        document.getElementById('windCh').innerHTML = Math.round(windChillCalc) + "°F";
    } else {
        document.getElementById('windCh').innerHTML = "N/A";
    }
})