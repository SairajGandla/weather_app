const weather = document.getElementById("weather");
const dropdown = document.getElementById("dropdown");

weather.addEventListener("click", () => {
  dropdown.classList.toggle("collapse");
});
const timer = setInterval(() => {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  document.getElementById("time").innerHTML = `${hours} : ${minutes} ${
    hours >= 12 ? "PM" : "AM"
  }`;
}, 1000);

