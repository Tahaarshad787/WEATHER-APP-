const API_KEY = `b45642ba89899f89736ac4a09a18c737`;
const inputdata = document.getElementById("inputField");
const showWeather = document.getElementById("showWeather");

const searchData = async () => {
    showWeather.innerHTML = `<div class="spinner-border text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div>`
   

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputdata.value}&appid=${API_KEY}&units=metric`;
const fetchData = await fetch(API_URL);
const response = await fetchData.json();

console.log(response);
return showData(response)

};

const showData = (data) => {
    showWeather.innerHTML = `<img width="80" src=" https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    <h1>Temperature: ${data.main.temp}°C</h1>
    <h2>${data.weather[0].main}</h2>
    <h3>Humidity: ${data.main.humidity}%</h3>
    <h4>Wind Speed: ${data.wind.speed} m/s</h4>
    <h4>Feels Like: ${data.main.feels_like}°C</h4>`
    

};

