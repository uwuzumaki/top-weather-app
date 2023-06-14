const displayWeather = (data) => {
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
  place.textContent = location.name;
  main.appendChild(place);

  const forecast = document.createElement("div");
  forecast.id = "forecast";
  forecast.textContent = current.feelslike_c;
  main.appendChild(forecast);
};

const queryLocation = async () => {
  const searchBar = document.getElementById("search-bar");
  const location = searchBar.value;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=408d0df5f4864527825230212231106&q=${location}`,
      { mode: "cors" }
    );
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    console.log(error);
  }
};

const searchBarButton = document.getElementById("search-bar-button");
searchBarButton.addEventListener("click", queryLocation);
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    queryLocation();
  }
});
