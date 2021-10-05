const formInput = document.getElementById('name-input');
const formOutput = document.getElementById('name-output');

formInput.addEventListener('input', updateValue);

function updateValue(e) {
    if (e.target.value == "") {
        formOutput.textContent = "Anonymous";
    } else {
        formOutput.textContent = e.target.value;
    }
}
