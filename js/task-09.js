function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
};

const conteiner = document.querySelector('.widget');
const changeColorBtn = document.querySelector('.change-color');
const nameColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
  conteiner.style.backgroundColor = getRandomHexColor();
  nameColor.textContent = getRandomHexColor(nameColor);
});




