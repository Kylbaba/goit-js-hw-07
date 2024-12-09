function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
function createBoxes(amount) {
  if (amount < 1 || amount > 100) return;

  boxesContainer.innerHTML = '';

  const boxes = [];

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10; 
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor(); 
    boxes.push(div); 
  }

  boxesContainer.append(...boxes);
}
function destroyBoxes() {
  boxesContainer.innerHTML = ''; 
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value); 
  createBoxes(amount); 
  input.value = ''; 
});
boxesContainer.style.display = 'flex';
boxesContainer.style.flexWrap = 'wrap';
boxesContainer.style.gap = '15px';
boxesContainer.style.marginTop = '50px';
destroyButton.addEventListener('click', destroyBoxes);