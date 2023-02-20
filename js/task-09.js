const button = document.querySelector(".change-color")
const span = document.querySelector(".color")

function changeBackgroundColor() {
  const color = getRandomHexColor()
  document.body.style.backgroundColor = color
  span.textContent = color
}
button.addEventListener("click", changeBackgroundColor)
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
