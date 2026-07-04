const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const button = document.getElementById("button");
const container = document.querySelector(".container");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        password.type = "password";
        togglePassword.innerHTML =
            '<i class="fa-solid fa-eye"></i>';
    }

});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailValue === "") {
        shake();
        alert("❌ Email is required.");
        email.focus();
        return;
    }

    if (!emailRegex.test(emailValue)) {
        shake();
        alert("❌ Please enter a valid Email.");
        email.focus();
        return;
    }
    
    if (passwordValue === "") {
        shake();
        alert("❌ Password is required.");
        password.focus();
        return;
    }

    button.innerHTML =
        '<i class="fa-solid fa-spinner fa-spin"></i> Logging In...';
    button.disabled = true;
    setTimeout(() => {
        button.innerHTML =
            '<i class="fa-solid fa-check"></i> Login Successful';
        button.style.background =
            "#16a34a";
        setTimeout(() => {
            // Redirect to resume dashboard after successful login
            window.location.href = "resume.dashboard.html";
        }, 1000);

    }, 1500);

});

function shake() {
    container.classList.add("shake");
    setTimeout(() => {
        container.classList.remove("shake");
    }, 400);
}

// Optional: Handle direct click on the "View Resume Dashboard" link
document.querySelector('.login-link')?.addEventListener('click', function(e) {
    // You can add a confirmation or tracking here if needed
    console.log('Navigating to Resume Dashboard...');
});