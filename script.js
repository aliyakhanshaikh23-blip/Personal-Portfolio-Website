document.getElementById("contactForm").onsubmit = function(event) {

    event.preventDefault();

    alert("Contact submitted!");

};
document.getElementById("contactForm").onsubmit = function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("ph-no").value;

    document.getElementById("showName").innerHTML = "Name: " + name;
    document.getElementById("showEmail").innerHTML = "Email: " + email;
    document.getElementById("showPhone").innerHTML = "Phone: " + phone;

    alert("Response submitted!");

};
function adminlogin() {

    let username = document.getElementById("adminUser").value;
    let password = document.getElementById("adminPass").value;

    if (username === "admin" && password === "1234") {

        alert("Admin login successful!");

    } else {

        alert("Wrong username or password!");

    }
}
function showPassword() {

    let password = document.getElementById("adminPass");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}