function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesContainer = document.getElementById("boxes");
const createButton = document.querySelector("[data-create='']");
const destroyButton = document.querySelector("[data-destroy='']");

const DEFAULT_SIZE = 30;
let baseWidth = DEFAULT_SIZE;
const amount = document.querySelector("[type='number']");

destroyButton.addEventListener("click", destroyBoxes)

function destroyBoxes(event) {
  boxesContainer.innerHTML = '';
  baseWidth = DEFAULT_SIZE;
}

createButton.addEventListener("click", creator);

function creator(event) {
  createBoxes(amount.value);
}

function createBoxes(amount) {
  if (amount >= 1 && amount <= 100) {
    const divArray = [];
    for (let i = 0; i < amount; i++, baseWidth += 10){
      divArray.push(document.createElement("div"));
      divArray[divArray.length - 1].style.backgroundColor = getRandomHexColor();
      divArray[divArray.length - 1].style.width = `${baseWidth}px`;
      divArray[divArray.length - 1].style.height = `${baseWidth}px`;
    }
    boxesContainer.append(...divArray);
  }
}
