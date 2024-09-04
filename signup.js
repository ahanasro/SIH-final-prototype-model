let signup = document.querySelector("#signup-btn");

signup.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    location.href = "login.html";
    console.log("Redirecting to login.html");
});
