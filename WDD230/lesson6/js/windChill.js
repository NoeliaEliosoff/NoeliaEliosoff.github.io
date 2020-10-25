function windChill() {
    let tempF = parseFloat(document.getElementById('.highTemp').value);
    let speed = parseFloat(document.getElementById('.wind').value);
    let output = "N/A";
    if (tempF <= 50 && speed > 3) {
        let f = 35.74 + 0.6215 * tempF - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * (Math.pow(speed, 0.16)));
        let output = Math.round(f);
    }
    document.getElementById('.windCh').innerHTML = output;
}