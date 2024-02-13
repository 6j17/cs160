const speeds = {
    walking: 3.1,
    boostedMiniS: 18,
    evolveBambooGTR: 24,
    oneWheelXR: 19,
    swagtronSwagger5: 18,
    segwayNinebotS: 10,
    segwayNinebotSPlus: 12,
    razorScooter: 18,
    geoBlade500: 15,
    unagiE500: 16,
};

function calculateTime() {
    const distance = document.getElementById('distance').value;
    const transport = document.getElementById('transport').value;
    const speed = speeds[transport];
    const timeInHours = distance / speed;
    const timeInMinutes = timeInHours * 60;

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `Traveling ${distance} miles using <strong>${transport}</strong> will result in a <strong>${timeInMinutes.toFixed(2)} minute</strong> travel time.`;

    
    let comparisonResult = '<p>Comparison with other modes:</p>';
    Object.keys(speeds).forEach(mode => {
        if (mode !== transport) {
            const compTimeInHours = distance / speeds[mode];
            const compTimeInMinutes = compTimeInHours * 60;
            comparisonResult += `<p><strong>${mode}</strong>: ${compTimeInMinutes.toFixed(2)} minutes</p>`;
        }
    });

    resultDiv.innerHTML += comparisonResult;
}
