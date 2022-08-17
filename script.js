const board = document.querySelector('#board');
const SQUARES_NUMBER = 460;
const colors = [
  '#e83556',
  '#e835d6',
  '#8335e8',
  '#3589e8',
  '#35dce8',
  '#35e868',
  '#e5e835',
  '#e8a135',
  '#e03838',
];

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}

function setColor(value) {
  const element = value;
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(value) {
  const element = value;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #1d1d1d';
}

for (let i = 0; i < SQUARES_NUMBER; i += 1) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColor(square);
  });

  square.addEventListener('mouseleave', () => {
    removeColor(square);
  });

  board.append(square);
}
