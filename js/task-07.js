const fontToggle = document.getElementById('font-size-control');
const textSpan = document.getElementById("text");

fontToggle.addEventListener('input', updateValue);

function updateValue(e) {
    textSpan.style.fontSize = `${e.target.value}px`;
}