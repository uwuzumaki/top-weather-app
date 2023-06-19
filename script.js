import queryLocation from "./Modules/QueryLocation/QueryLocation.js";
import Footer from "./Modules/Footer/Footer.js";

const searchBarButton = document.getElementById("search-bar-button");
searchBarButton.addEventListener("click", queryLocation);
const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    queryLocation();
  }
});

const container = document.getElementById("container");
const main = document.createElement("div");
main.id = "main";
container.appendChild(main);

Footer();
