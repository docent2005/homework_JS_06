const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients');
const linc = [];
for (const index in ingredients) {
  linc.push(document.createElement('li'));
  linc[index].classList.add('item');
  linc[index].textContent = ingredients[index];
}
list.append(...(linc));