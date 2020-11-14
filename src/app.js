function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let cityElement = document.querySelector("#city");
  let skystatusElement = document.querySelector("#skystatus");
  let windElement = document.querySelector("#wind");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement = document.querySelector("#temperature");
  let dateElement = document.querySelector("#date");
  cityElement.innerHTML = response.data.name;

  skystatusElement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  humidityElement.innerHTML = Math.round(response.data.main.humidity);
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "1768d882e21eece70a5c2f0f1301e790";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=1768d882e21eece70a5c2f0f1301e790&units=metric";

axios.get(apiUrl).then(displayTemperature);
