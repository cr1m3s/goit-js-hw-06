const formInput = document.getElementById('validation-input');

formInput.addEventListener('blur', updateValue);

function updateValue(e) {
    if (e.target.value.length === parseInt(formInput.getAttribute('data-length'))) {
        formInput.classList = "valid";
    } else {
        formInput.classList = "invalid";
    }
}