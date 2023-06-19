const DisplayForecast = (forecast) => {
  console.log(forecast);
  const future = document.getElementById("forecast");

  for (let i = 0; i < forecast.forecastday.length; i++) {
    const container = document.createElement("div");
    container.classList = `two-div`;
    future.appendChild(container);

    const day = document.createElement("div");
    const date = new Date(forecast.forecastday[i].date);
    const displayDate = `${date.toLocaleString("default", {
      dateStyle: "full",
    })}`;
    day.textContent = displayDate;
    container.appendChild(day);

    const temp = document.createElement("div");
    temp.textContent = forecast.forecastday[i].day.avgtemp_c + " C";
    container.appendChild(temp);
  }
};

export default DisplayForecast;
