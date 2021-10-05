const inputForm = document.querySelector(".login-form");

inputForm.addEventListener("submit", onFormSubmit);

let result = {};

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    let result = {};

    let email = inputForm.elements.namedItem("email").value;
    let password = inputForm.elements.namedItem("password").value

    if (email === "" || password === "") {
        alert("Please fill all fields!");
    }

    if (email && password) {
        result["email"] = email;
        result["password"] = password;
    }

    console.log(result);
    event.currentTarget.reset();
}

