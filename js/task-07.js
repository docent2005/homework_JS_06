const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(input.value);
input.addEventListener('input', () => {
    text.style.cssText = `font-size : ${input.value}px;`;
});