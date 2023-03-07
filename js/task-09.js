function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const backgraund = document.querySelector('.widget').parentElement;
const buttonColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
buttonColor.addEventListener('click', () => {
  backgraund.style.backgroundColor = getRandomHexColor();
  spanColor.textContent = getRandomHexColor();
});

