const value = document.querySelector('#value');
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let temp = 0;

decrement.addEventListener('click', () => {
    temp -= 1;
    value.textContent = temp;
});
increment.addEventListener('click', () => {
    temp += 1;
    value.textContent = temp;
});