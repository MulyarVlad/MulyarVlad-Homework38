fetch('http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
  .then(response => response.json())
  .then(data => {
    const weatherEl = document.getElementById('weather');
    weatherEl.innerHTML = `
    <p>Temperature: ${data.main.temp} &deg;C</p>
    <p>Pressure: ${data.main.pressure} hPa</p>
    <p>Description: ${data.weather[0].description}</p>
    <p>Humidity: ${data.main.humidity} %</p>
    <p>Wind speed: ${data.wind.speed} m/s</p>
    <p>Wind direction: ${data.wind.deg} &deg;</p>
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="Weather icon">
`;
})
.catch(error => console.error(error));

weatherEl.innerHTML = '';