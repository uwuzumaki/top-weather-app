const DisplayCurrent = (current) => {
  const place = document.getElementById("place");

  const currentWrapper = document.createElement("div");
  currentWrapper.id = "current-wrapper";
  currentWrapper.classList = "two-div";
  place.appendChild(currentWrapper);

  const currentText = document.createElement("div");
  currentText.textContent = "Current temp";
  currentWrapper.appendChild(currentText);

  const currentValue = document.createElement("div");
  currentValue.textContent = current.temp_c + " C";
  currentWrapper.appendChild(currentValue);

  const feelsLikeWrapper = document.createElement("div");
  feelsLikeWrapper.id = "feels-like-wrapper";
  feelsLikeWrapper.classList = "two-div";
  place.appendChild(feelsLikeWrapper);

  const feelsLikeText = document.createElement("div");
  feelsLikeText.textContent = "Feels like";
  feelsLikeWrapper.appendChild(feelsLikeText);

  const feelsLikeValue = document.createElement("div");
  feelsLikeValue.textContent = current.feelslike_c + " C";
  feelsLikeWrapper.appendChild(feelsLikeValue);

  const windWrapper = document.createElement("div");
  windWrapper.id = "wind-wrapper";
  windWrapper.classList = "two-div";
  place.appendChild(windWrapper);

  const windText = document.createElement("div");
  windText.textContent = "Wind Speed";
  windWrapper.appendChild(windText);

  const windValue = document.createElement("div");
  windValue.textContent = current.wind_kph + " km/h";
  windWrapper.appendChild(windValue);

  const humidityWrapper = document.createElement("div");
  humidityWrapper.id = "humidity-wrapper";
  humidityWrapper.classList = "two-div";
  place.appendChild(humidityWrapper);

  const humidityText = document.createElement("div");
  humidityText.textContent = "Humidity";
  humidityWrapper.appendChild(humidityText);

  const humidityValue = document.createElement("div");
  humidityValue.textContent = current.humidity + "%";
  humidityWrapper.appendChild(humidityValue);

  const conditionWrapper = document.createElement("div");
  conditionWrapper.id = "condition-wrapper";
  conditionWrapper.classList = "two-div";
  place.appendChild(conditionWrapper);

  const conditionText = document.createElement("div");
  conditionText.textContent = "Local conditions";
  conditionWrapper.appendChild(conditionText);

  const conditionValue = document.createElement("div");
  conditionValue.textContent = current.condition.text;
  conditionWrapper.appendChild(conditionValue);

  const visibilityWrapper = document.createElement("div");
  visibilityWrapper.id = "visibility-wrapper";
  visibilityWrapper.classList = "two-div";
  place.appendChild(visibilityWrapper);

  const visibilityText = document.createElement("div");
  visibilityText.textContent = "Visibility";
  visibilityWrapper.appendChild(visibilityText);

  const visibilityValue = document.createElement("div");
  visibilityValue.textContent = current.vis_km + " km";
  visibilityWrapper.appendChild(visibilityValue);
};

export default DisplayCurrent;
