import DisplayLocation from "../DisplayLocation/DisplayLocation.js";
import DisplayForecast from "../DisplayForecast/DisplayForecast.js";

const DisplayWeather = (data) => {
  const container = document.getElementById("container");
  const current = data.current;
  const location = data.location;
  console.log(current, location);

  const oldWeather = document.getElementById("weather");
  if (oldWeather) {
    oldWeather.remove();
  }

  const main = document.createElement("div");
  main.id = "weather";
  container.appendChild(main);

  const place = document.createElement("div");
  place.id = "place";
  main.appendChild(place);
  DisplayLocation(location);

  const forecast = document.createElement("div");
  forecast.id = "forecast";
  main.appendChild(forecast);
  DisplayForecast(current);
};

export default DisplayWeather;
