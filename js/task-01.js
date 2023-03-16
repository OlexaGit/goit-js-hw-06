const categories = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${categories}`);
const category = document.querySelectorAll("li.item");
category.forEach((element) => {
  const categoryName = element.firstElementChild;
  console.log(`Category: ${categoryName.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});
