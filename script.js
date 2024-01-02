const a = document.getElementById("weather");
const b = document.getElementById("dropdown");

a.addEventListener("click", () => {
  b.classList.toggle("collapse");
});
