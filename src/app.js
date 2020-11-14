let apiKey = "1768d882e21eece70a5c2f0f1301e790";
let apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Seattle&appid=1768d882e21eece70a5c2f0f1301e790&units=metric";

function displayTemperature(response) {
  console.log(response.data);
  console.log(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;

  let skystatusElement = document.querySelector("#skystatus");
  skystatusElement.innerHTML = response.data.weather[0].description;

  temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
}

axios.get(apiUrl).then(displayTemperature);
