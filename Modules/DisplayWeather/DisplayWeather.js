import DisplayLocation from "../DisplayLocation/DisplayLocation.js";
import DisplayCurrent from "../DisplayCurrent/DisplayCurrent.js";
import DisplayForecast from "../DisplayForecast/DisplayForecast.js";

const DisplayWeather = (data) => {
  const container = document.getElementById("container");
  const location = data.location;
  const current = data.current;
  const future = data.forecast;

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
  DisplayCurrent(current);

  const forecast = document.createElement("div");
  forecast.id = "forecast";
  main.appendChild(forecast);
  DisplayForecast(future);
};

export default DisplayWeather;
