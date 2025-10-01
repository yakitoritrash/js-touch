async function getWeatherData(location) {
  const apiKey = "6f60690035e9aa02c004a049798f430b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    console.log("error fetching weather data:", error);
  }
}

function processData(apiData) {
  const returnObj = {
    name: apiData.name,
    coord: {lon: apiData.coord.lon, lat: apiData.coord.lat},
    temp: apiData.main.temp,
    temp_feels_like: apiData.main.feels_like,
    humidity: apiData.main.humidity,
    main: apiData.weather[0].main,
    description: apiData.weather[0].description,
  };
  console.log(returnObj);
  return returnObj;
}

function Displaydata(returnObj) {
  const div = document.getElementById("main");
  const cityname = document.createElement("h1");
  cityname.textContent = returnObj.name;
  cityname.classList.add("top-head");
  const maincontent = document.createElement("h1");
  maincontent.textContent = returnObj.main;
  div.appendChild(cityname);
  const temp = document.createElement("h1");
  temp.textContent = returnObj.temp;
  temp.classList.add("top-head");
  div.appendChild(temp);
  div.appendChild(maincontent);
  const description = document.createElement("p"); 
  description.textContent = returnObj.description;
  div.appendChild(description);
}

async function main() {
  const form = document.getElementById("location-form");
  const input = document.getElementById("location-input");
  const maindiv = document.getElementById("main");

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const location = input.value;
    maindiv.innerHTML = '';
    const apiData = await getWeatherData(location);
    if (apiData) {
      const returnObj = processData(apiData);
      Displaydata(returnObj);
    }
  });
  //console.log(apiData);
}

main();
