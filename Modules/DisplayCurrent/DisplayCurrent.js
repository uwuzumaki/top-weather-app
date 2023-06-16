import BasicChildDiv from "../BasicChildDiv/BasicChildDiv.js";

const DisplayCurrent = (current) => {
  const place = document.getElementById("place");
  BasicChildDiv("temp-c", current.temp_c, place);
  BasicChildDiv("feelslike-c", current.feelslike_c, place);
  BasicChildDiv("wind", current.wind_kph, place);
  BasicChildDiv("humidity", current.humidity, place);
  BasicChildDiv("condition", current.condition.text, place);
  BasicChildDiv("visibility", current.vis_km, place);
};

export default DisplayCurrent;
