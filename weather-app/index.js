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
  div.appendChild(cityname);
}

async function main() {
  const apiData = await getWeatherData("delhi");
  //console.log(apiData);
  if (apiData) {
    const returnObj = processData(apiData);
    Displaydata(returnObj);
  }
}

main();
