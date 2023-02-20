const categoriesList = document.getElementById("categories");
const categoriesCount = categoriesList.getElementsByTagName("li").length;

console.log("Number of categories: " + categoriesCount);

const categoriesItems = categoriesList.querySelectorAll("li.item")
categoriesItems.forEach(function (item) {
  let categoriesTittle = item.querySelector("h2").textContent;
  let categoriesElements = item.querySelectorAll("ul li").length;

  console.log("Category: " + categoriesTittle);
  console.log("Elements: " + categoriesElements);
});
