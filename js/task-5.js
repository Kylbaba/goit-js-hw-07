function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const button = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

button.addEventListener('click', () => {

  const randomColor = getRandomHexColor();
  
  document.body.style.backgroundColor = `rgb(${parseInt(randomColor.slice(1, 3), 16)}, ${parseInt(randomColor.slice(3, 5), 16)}, ${parseInt(randomColor.slice(5, 7), 16)})`;
  spanColor.textContent = randomColor;
});