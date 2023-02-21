const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('ul#ingredients')

const makeItemElements = ingredients => {
return  ingredients.map(ingredient => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('item');
    itemEl.textContent = ingredient;

return itemEl;
  });
};

const elements = makeItemElements(ingredients);

ingredientsEl.append(...elements);
console.log(ingredientsEl);
