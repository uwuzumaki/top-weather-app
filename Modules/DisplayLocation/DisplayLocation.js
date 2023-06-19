const DisplayLocation = (loc) => {
  const place = document.getElementById("place");

  const name = document.createElement("div");
  name.id = "city";
  name.textContent = loc.name;
  place.appendChild(name);

  const country = document.createElement("div");
  country.id = "country";
  country.textContent = loc.country;
  place.appendChild(country);

  const time = document.createElement("div");
  time.id = "local-time";
  const date = new Date(loc.localtime);
  console.log(date);
  time.textContent = `${date.toLocaleString("default", {
    dateStyle: "full",
  })}`;
  place.appendChild(time);
};

export default DisplayLocation;
