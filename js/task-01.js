const categories = document.getElementById("categories");
const items = categories.querySelectorAll("li.item");
console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const header = item.querySelector("h2");
  const elements = item.querySelectorAll("li").length;
  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${elements}`);
});
