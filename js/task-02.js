const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulLinkEl = document.querySelector('#ingredients');

const liElements = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.classList.add('item');
  liEl.textContent = ingredient;

  return liEl;
})

ulLinkEl.append(...liElements)
console.log(liElements)

 