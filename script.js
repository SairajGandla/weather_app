const weather = document.getElementById("weather");
const dropdown = document.getElementById("dropdown");

weather.addEventListener("click", () => {
  dropdown.classList.toggle("collapse");
});
