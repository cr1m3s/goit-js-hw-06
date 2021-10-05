const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const liIngridients = [];
for (let i of ingredients) {
  liIngridients.push(document.createElement("li"));
  liIngridients[liIngridients.length - 1].classList.add("item");
  liIngridients[liIngridients.length - 1].textContent = i;
}

const ulIngredients = document.getElementById("ingredients");
ulIngredients.append(...liIngridients);