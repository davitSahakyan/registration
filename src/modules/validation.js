const inputs = Array.from(document.getElementsByClassName("form-control"));

const form = document.getElementById("form");

const removeSpace = (string) => string.replace(/\s+/, "");

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
    console.log("iiiiii");
    let canCreateUser = true;
    inputs.forEach((input) => {
        if (input.name === "login" && input.value.length < 6) {
            input.parentElement.classList = "form-group hasError";
            return false;
        }
        if (input.name === "name" && input.value.length <= 2) {
            input.parentElement.classList = "form-group hasError";
            return false;
        }
        if (input.name === "lastname" && input.value.length <= 2) {
            input.parentElement.classList = "form-group hasError";
            return false;
        }
        if (input.name === "password" && input.value.length < 6) {
            input.parentElement.classList = "form-group hasError";
            return false;
        }
        if (input.name === "gender") {
            return false;
        }
        for (let i = 0; i < users.length; i++) {
            if (input.name === "login" && input.value === users[i].login) {
                canCreateUser = false;
            }
        }
    });

    if (canCreateUser) {
        const formData = Object.fromEntries(
            new FormData(document.getElementById("form")).entries()
        );
        users.push(formData);
    }
};

form.addEventListener("submit", (e) => {
    validation();
    console.log(users);
    e.preventDefault();
});
