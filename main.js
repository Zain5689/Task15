// التكليف 01

// Retrieve values from local storage or use default values
let fontSelect = document.getElementById("font-select");
let colorSelect = document.getElementById("color-select");
let sizeSelect = document.getElementById("size-select");

fontSelect.value = localStorage.getItem("font") || "Open Sans";
colorSelect.value = localStorage.getItem("color") || "#000000";
sizeSelect.value = localStorage.getItem("size") || "16";

// Apply selected options to the output text
function applyOptions() {
  let outputText = document.getElementById("output-text");
  let font = fontSelect.value;
  let color = colorSelect.value;
  let size = sizeSelect.value;

  outputText.style.fontFamily = font;
  outputText.style.color = color;
  outputText.style.fontSize = size + "px";

  // Save selected options to local storage
  localStorage.setItem("font", font);
  localStorage.setItem("color", color);
  localStorage.setItem("size", size);
}

// Apply options on page load
applyOptions();

// Attach event listeners to the select boxes
fontSelect.addEventListener("change", applyOptions);
colorSelect.addEventListener("change", applyOptions);
sizeSelect.addEventListener("change", applyOptions);

// التكليف 02

document.querySelector(".name").onblur = function () {
  window.sessionStorage.setItem("input-name", this.value);
};

// let sizeSelect = document.getElementById("size-select");
document.getElementById(".size-select").onselect = function () {
  window.sessionStorage.setItem("select-name", this.value);
};
