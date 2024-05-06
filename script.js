
function convertToCelsius() {
    var temperature = parseFloat(document.getElementById('temperatureInput').value);
    if (!isNaN(temperature)) {
        var celsius = (temperature - 32) * (5 / 9);
        document.getElementById('result').innerHTML = celsius.toFixed(2) + "°C";
    } else {
        alert("Please enter a valid number for temperature.");
    }
}

function convertToFahrenheit() {
    var temperature = parseFloat(document.getElementById('temperatureInput').value);
    if (!isNaN(temperature)) {
        var fahrenheit = (temperature * (9 / 5)) + 32;
        document.getElementById('result').innerHTML = fahrenheit.toFixed(2) + "°F";
    } else {
        alert("Please enter a valid number for temperature.");
    }
}