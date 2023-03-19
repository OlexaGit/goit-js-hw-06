const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ---version № 1---

// const totalArray = [];
// const addIngredients = ingredients.forEach((item) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = item;
//   itemEl.classList.add("item");
//   totalArray.push(itemEl);
//   console.log(itemEl);
// });
// console.log(totalArray);
// const ingredientsElementAll = document.querySelector("#ingredients");
// ingredientsElementAll.append(...totalArray);

// ---version № 2---

// const totalArray = [];
// const addIngredients = ingredients.map((item) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = item;
//   itemEl.classList.add("item");
//   totalArray.push(itemEl);
//   console.log(itemEl);
// });
// console.log(totalArray);
// const ingredientsElementAll = document.querySelector("#ingredients");
// ingredientsElementAll.append(...totalArray);

// ---version № 3---

const addIngredients = ingredients.reduce((total, elem) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = elem;
  itemEl.classList.add("item");
  total.push(itemEl);
  console.log(itemEl);
  return total;
}, []);
console.log(addIngredients);
const ingredientsElementAll = document.querySelector("#ingredients");
ingredientsElementAll.append(...addIngredients);
