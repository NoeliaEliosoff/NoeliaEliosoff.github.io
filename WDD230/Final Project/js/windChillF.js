window.onload = windChill;

function windChill() {
    let tempF = parseFloat(document.getElementById('highTemp').innerHTML);
    let speed = parseFloat(document.getElementById('wind').innerHTML);

    if (tempF <= 50 && speed > 3) {
        let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
        document.getElementById('windCh').innerHTML = Math.round(f);
    } else {
        document.getElementById('windCh').innerHTML = "N/A";
    }
}