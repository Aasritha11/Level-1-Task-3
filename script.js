const temperatureInput = document.getElementById("temperature");
const fromSelect = document.getElementById("from");
const toSelect = document.getElementById("to");
const resultElement = document.getElementById("result");

function updateWidth() {
  const fromWidth = document.querySelector("#from option:checked").textContent.length * 10 + 100;
  const toWidth = document.querySelector("#to option:checked").textContent.length * 10 + 100;
  fromSelect.style.minWidth = `${fromWidth}px`;
  toSelect.style.minWidth = `${toWidth}px`;
}

fromSelect.addEventListener("change", updateWidth);
toSelect.addEventListener("change", updateWidth);

document.addEventListener("submit", (e) => {
  e.preventDefault();
  const temperature = temperatureInput.value;
  const from = fromSelect.value;
  const to = toSelect.value;

  let result;
  if (from === "Celsius" && to === "Fahrenheit") {
    result = (temperature * 9 / 5) + 32;
  } else if (from === "Celsius" && to === "Kelvin") {
    result = temperature + 273.15;
  } else if (from === "Fahrenheit" && to === "Celsius") {
    result = (temperature - 32) * 5 / 9;
  } else if (from === "Fahrenheit" && to === "Kelvin") {
    result = (temperature - 32) * 5 / 9 + 273.15;
  } else if (from === "Kelvin" && to === "Celsius") {
    result = temperature - 273.15;
  } else if (from === "Kelvin" && to === "Fahrenheit") {
    result = (temperature - 273.15) * 9 / 5 + 32;
  }

  resultElement.textContent = `${temperature}°${from} is equal to ${result.toFixed(2)}°${to}`;
  updateWidth();
});

updateWidth();