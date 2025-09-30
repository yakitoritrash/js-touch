async function getWeatherData(location) {
  const apiKey = "6f60690035e9aa02c004a049798f430b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(url);
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    console.log("error fetching weather data:", error);
  }
}

const apiData = getWeatherData("delhi");

function processData(apiData) {

}
