const inputs = Array.from(document.getElementsByClassName("form-control"));

const form = document.getElementById("form");
const loginForm = document.getElementById("loginForm");

const removeSpace = (string) => string.replace(/\s+/, "");

let users = JSON.parse(localStorage.getItem("users")) || [];

const addErrorClass = (inputs) => {
    inputs.forEach((input) => {
        if (input.name === "login" && input.value.length < 6) {
            input.parentElement.classList = "form-group hasError";
            inputsAreValid = false;
        }
        if (input.name === "name" && input.value.length <= 2) {
            input.parentElement.classList = "form-group hasError";
            inputsAreValid = false;
        }
        if (input.name === "lastname" && input.value.length <= 2) {
            input.parentElement.classList = "form-group hasError";
            inputsAreValid = false;
        }
        if (input.name === "password" && input.value.length < 6) {
            input.parentElement.classList = "form-group hasError";
            inputsAreValid = false;
        }
    });
};

inputs.forEach((input) => {
    input.addEventListener("textInput", () => {
        let WithoutFirstSpace = removeSpace(input.value);
        if (input.name === "login" && WithoutFirstSpace.length >= 6) {
            input.parentElement.classList.remove("hasError");
            return true;
        }
        if (input.name === "name" && WithoutFirstSpace.length >= 2) {
            input.parentElement.classList.remove("hasError");
            return true;
        }
        if (input.name === "lastname" && WithoutFirstSpace.length >= 2) {
            input.parentElement.classList.remove("hasError");
            return true;
        }
        if (input.name === "password" && WithoutFirstSpace.length >= 6) {
            input.parentElement.classList.remove("hasError");
            return true;
        }
    });
});

const validation = () => {
    let canCreateUser = false;
    let inputsAreValid = true;
    addErrorClass(inputs);
    if (inputsAreValid) {
        let loginInput = inputs.find((input) => input.name === "login");
        if (users.length) {
            for (let i = 0; i < users.length; i++) {
                if (
                    loginInput.name === "login" &&
                    loginInput.value === users[i].login
                ) {
                    canCreateUser = false;
                } else {
                    canCreateUser = true;
                }
            }
        } else {
            canCreateUser = true;
        }
    }
    if (canCreateUser) {
        const formData = Object.fromEntries(
            new FormData(document.getElementById("form")).entries()
        );
        users.push(formData);
        localStorage.setItem("users", JSON.stringify(users));
        alert("you have successfully registered");
    }
};

const verifyUser = () => {
    let inputsAreValid = true;
    addErrorClass(inputs);
    if (inputsAreValid) {
        const formData = Object.fromEntries(
            new FormData(document.getElementById("loginForm")).entries()
        );
        let foundRegistredUser = users.find(
            (user) =>
                user.login === formData.login &&
                user.password === formData.password
        );
        if (foundRegistredUser) {
            window.location = "./welcome.html";
        }
    }
};

if (form) {
    form.addEventListener("submit", (e) => {
        validation();
        e.preventDefault();
    });
}
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        verifyUser();
        e.preventDefault();
    });
}
