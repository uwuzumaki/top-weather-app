import BasicChildDiv from "../BasicChildDiv/BasicChildDiv.js";

const DisplayLocation = (loc) => {
  const place = document.getElementById("place");
  BasicChildDiv("city", loc.name, place);
  BasicChildDiv("country", loc.country, place);
  BasicChildDiv("time", loc.localtime, place);
};

export default DisplayLocation;
