import DisplayLocation from "../DisplayLocation/DisplayLocation.js";
import DisplayCurrent from "../DisplayCurrent/DisplayCurrent.js";
import DisplayForecast from "../DisplayForecast/DisplayForecast.js";

const DisplayWeather = (data) => {
  const container = document.getElementById("main");
  const location = data.location;
  const current = data.current;
  const future = data.forecast;

  const oldWeather = document.getElementById("place");
  if (oldWeather) {
    oldWeather.remove();
  }

  const oldWeather2 = document.getElementById("forecast");
  if (oldWeather2) {
    oldWeather2.remove();
  }

  const place = document.createElement("div");
  place.id = "place";
  container.appendChild(place);
  DisplayLocation(location);
  DisplayCurrent(current);

  const forecast = document.createElement("div");
  forecast.id = "forecast";
  container.appendChild(forecast);
  DisplayForecast(future);
};

export default DisplayWeather;
