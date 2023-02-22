const counterValue = document.getElementById("value");
let count = 0;

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.action === "decrement") {
      count--;
    } else if (button.dataset.action === "increment") {
      count++;
    }

    counterValue.textContent = count;
  });
});
