const login = document.forms["form"]["login"];
const name = document.forms["form"]["name"];
const lastname = document.forms["form"]["lastname"];
const password = document.forms["form"]["password"];
const gender = document.forms["form"]["gender"];

const loginError = document.getElementById("loginError");
const nameError = document.getElementById("nameError");
const lastnameError = document.getElementById("lastnameError");
const passwordError = document.getElementById("passwordError");

const form = document.getElementById("form");

const users = [
    {
        login: "Artyom111",
        name: "Artyom",
        lastname: "Saribekyan",
        password: "Artyom222",
        gender: "male",
    },
    {
        login: "Davit111",
        name: "Davit",
        lastname: "Sahakyan",
        password: "Davit222",
        gender: "male",
    },
    {
        login: "Ani111",
        name: "Ani",
        lastname: "Sahakyan",
        gender: "famale",
        password: "Aniooo222",
    },
];

const removeSpace = (string) => {
    const stringWithoutSpaces = string.replace(/\s+/, "");
    return stringWithoutSpaces;
};

login.addEventListener("textInput", () => {
    const WithoutFirstSpace = removeSpace(login.value);
    if (WithoutFirstSpace.length >= 6) {
        login.style.border = "1px solid silver";
        loginError.style.display = "none";
        return true;
    }
});
name.addEventListener("textInput", () => {
    const WithoutFirstSpace = removeSpace(name.value);
    if (WithoutFirstSpace.length > 2) {
        name.style.border = "1px solid silver";
        nameError.style.display = "none";
        return true;
    }
});
lastname.addEventListener("textInput", () => {
    const WithoutFirstSpace = removeSpace(lastname.value);
    if (WithoutFirstSpace.length > 2) {
        lastname.style.border = "1px solid silver";
        lastnameError.style.display = "none";
        return true;
    }
});
password.addEventListener("textInput", () => {
    const WithoutFirstSpace = removeSpace(password.value);
    if (WithoutFirstSpace.length >= 6) {
        password.style.border = "1px solid silver";
        passwordError.style.display = "none";
        return true;
    }
});

const validation = () => {
    let canCreateUser = true;
    const loginValue = removeSpace(login.value);
    const nameValue = removeSpace(name.value);
    const lastnameValue = removeSpace(lastname.value);
    const passwordValue = removeSpace(password.value);
    if (loginValue.length < 6) {
        login.style.border = "1px solid red";
        loginError.style.display = "block";
        login.focus();
        return false;
    }
    if (nameValue.length < 2) {
        name.style.border = "1px solid red";
        nameError.style.display = "block";
        name.focus();
        return false;
    }
    if (lastnameValue.length < 2) {
        lastname.style.border = "1px solid red";
        lastnameError.style.display = "block";
        lastname.focus();
        return false;
    }
    if (passwordValue.length < 6) {
        password.style.border = "1px solid red";
        passwordError.style.display = "block";
        password.focus();
        return false;
    }
    for (let i = 0; i < users.length; i++) {
        if (loginValue === users[i].login) {
            canCreateUser = false;
        }
    }
    if (canCreateUser) {
        users.push({
            login: loginValue,
            name: nameValue,
            lastname: lastnameValue,
            password: passwordValue,
            gender: gender.value,
        });
    }
};

form.addEventListener("submit", (e) => {
    validation();
    console.log(users);
    e.preventDefault();
});
