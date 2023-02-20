const input = document.querySelector("#font-size-control");
const output = document.querySelector("#text")

input.addEventListener("input", (event) => {
  text.style.fontSize = `${event.target.value}px` 
  
})