function validateLogin() {
    // Get username and password values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Clear any previous error message
    errorMessage.innerText = "";

    // Simple validation for non-empty fields
    if (username === "" || password === "") {
        errorMessage.innerText = "Please enter both username and password.";
        return;
    }

    // Replace with actual login logic as needed
    if (username === "admin" && password === "password") {
        alert("Login successful!");
        // Redirect to a different page if login is successful
        window.location.href = "welcome.html";
    } else {
        errorMessage.innerText = "Incorrect username or password.";
    }
}