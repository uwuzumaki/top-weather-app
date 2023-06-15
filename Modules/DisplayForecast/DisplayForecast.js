import BasicChildDiv from "../BasicChildDiv/BasicChildDiv.js";

const DisplayForecast = (fore) => {
  const forecast = document.getElementById("forecast");
  BasicChildDiv("temp-c", fore.temp_c, forecast);
  BasicChildDiv("feelslike-c", fore.feelslike_c, forecast);
  BasicChildDiv("wind", fore.wind_kph, forecast);
  BasicChildDiv("humidity", fore.humidity, forecast);
  BasicChildDiv("condition", fore.condition.text, forecast);
  BasicChildDiv("visibility", fore.vis_km, forecast);
};

export default DisplayForecast;
