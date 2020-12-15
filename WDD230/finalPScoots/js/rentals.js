const rentURL = 'data/rentals.json';

fetch(rentURL)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonObject) {
        const types = jsonObject['types'];

        for (let i = 0; i < types.length; i++) {

            document.getElementById(`rT${i+1}`).textContent = types[i].rentalType;
            document.getElementById(`mP${i+1}`).textContent = types[i].maxPersons;
            document.getElementById(`hDR${i+1}`).textContent = types[i].halfDayRes;
            document.getElementById(`fDR${i+1}`).textContent = types[i].fullDayRes;
            document.getElementById(`hD${i+1}`).textContent = types[i].halfDayWI;
            document.getElementById(`fD${i+1}`).textContent = types[i].fullDayWI;

        }
    });