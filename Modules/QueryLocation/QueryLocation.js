import displayWeather from "../DisplayWeather/DisplayWeather.js";

const QueryLocation = async () => {
  const searchBar = document.getElementById("search-bar");
  const location = searchBar.value;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=408d0df5f4864527825230212231106&q=${location}&days=14`,
      { mode: "cors" }
    );
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.log(error);
  }
};

export default QueryLocation;
