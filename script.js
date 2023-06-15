import queryLocation from "./Modules/QueryLocation/QueryLocation.js";

const searchBarButton = document.getElementById("search-bar-button");
searchBarButton.addEventListener("click", queryLocation);
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    queryLocation();
  }
});
