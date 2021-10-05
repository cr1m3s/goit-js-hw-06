function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

colorButton.addEventListener('click', updateColor);

function updateColor(event) {
  let randColor = getRandomHexColor();

  document.body.style.backgroundColor = randColor;
  colorSpan.textContent = randColor;
}