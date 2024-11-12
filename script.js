let login = document.querySelector('#btn');
login.addEventListener('click', function (event) {
    event.preventDefault();

    let user_name = document.getElementById("username");
    let user_password = document.getElementById("password");

    let user_names = user_name.value.trim();
    let user_pass = user_password.value.trim();

    if (user_names && user_pass) {
        localStorage.setItem("Username", user_names);
        localStorage.setItem("Password", user_pass);
    }

    user_password.value = "";
    user_name.value = "";

});

let password = document.getElementById("password");

let icon = document.querySelector("#icon");

icon.onclick = function() {
    if (password.type === "password") {
        password.type = "text";
        icon.className = "fa-solid fa-eye"
    }
    else {
        password.type = "password";
        icon.className = "fa-solid fa-eye-slash"
    }
}


let login1 = document.querySelector('#button');
login1.addEventListener('click', function (event) {
    event.preventDefault();

    let user_name = document.getElementById("usernames");
    let user_password = document.getElementById("passwords");

    let user_names = user_name.value.trim();
    let user_pass = user_password.value.trim();

    if (user_names && user_pass) {
        localStorage.getItem("Username");
        localStorage.getItem("Password");
        alert("Login Successfull")
    }

    user_password.value = "";
    user_name.value = "";

});
