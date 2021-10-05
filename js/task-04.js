let counterValue = 0;

const incButton = document.querySelector("[data-action=increment]");
const decButton = document.querySelector("[data-action=decrement]");

const pValue = document.getElementById("value");

const incHandleClick = () => { ++counterValue; pValue.textContent = counterValue;};
const decHandleClick = () => {--counterValue; pValue.textContent = counterValue;};
incButton.addEventListener("click", incHandleClick);
decButton.addEventListener("click", decHandleClick);
