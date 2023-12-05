document.getElementById('FindBtn').addEventListener('click', function() {
    let cityName = document.getElementById('inp').value;

    if(cityName === '') {
        alert('Please enter a city name.');
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=550f2cbb4eee0120d7c0267117f4e07b`)
    .then(response => response.json())
    .then(data => {
        let temperature = data.main.temp - 273.15; // Convert temperature from Kelvin to Celsius
        let maxTemperature = data.main.temp_max - 273.15; // Convert temperature from Kelvin to Celsius
        let minTemperature = data.main.temp_min - 273.15; // Convert temperature from Kelvin to Celsius
        let humidity = data.main.humidity;
        let windDegrees = data.wind.deg;
        let windSpeed = data.wind.speed;

        // Display the weather data in the specified order with symbols
        document.getElementById('CityResponse.temp').textContent = ` ${temperature.toFixed(2)}°C`;
        document.getElementById('CityResponse.max_temp').textContent = `  ${maxTemperature.toFixed(2)}°C`;
        document.getElementById('CityResponse.min_temp').textContent = ` ${minTemperature.toFixed(2)}°C`;
        document.getElementById('CityResponse.wind_degrees').textContent = ` ${windDegrees}°`;
         document.getElementById('CityResponse.humidity').textContent = ` ${humidity}%`;
      document.getElementById('CityResponse.wind_speed').textContent = ` ${windSpeed}m/s`;
    })
    .catch(error => {
        alert('An error occurred while fetching the weather data. Please try again.');
        console.error('Error:', error);
    });
});
