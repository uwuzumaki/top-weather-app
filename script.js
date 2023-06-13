const queryLocation = async () => {
  const searchBar = document.getElementById("search-bar");
  const location = searchBar.value;
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=408d0df5f4864527825230212231106&q=${location}`,
      { mode: "cors" }
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const searchBarButton = document.getElementById("search-bar-button");
searchBarButton.addEventListener("click", queryLocation);
