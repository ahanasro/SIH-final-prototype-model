
let loginbtn = document.querySelector("#login-submit-btn");

loginbtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    location.href = "index.html";
    console.log(e);
});

