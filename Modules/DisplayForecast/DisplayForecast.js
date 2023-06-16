import BasicChildDiv from "../BasicChildDiv/BasicChildDiv.js";

const DisplayForecast = (forecast) => {
  console.log(forecast);
  const future = document.getElementById("forecast");
  BasicChildDiv("day1", forecast.forecastday[0].day.avgtemp_c, future);
};

export default DisplayForecast;
