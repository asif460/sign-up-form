document.addEventListener("DOMContentLoaded", () => {
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");
    const errorText = document.getElementById("password-error");

    confirmPassword.addEventListener("input", () => {
        if (password.value !== confirmPassword.value) {
            errorText.textContent = "Passwords do not match";
            confirmPassword.style.borderColor = "red";
        } else {
            errorText.textContent = "";
            confirmPassword.style.borderColor = "";
        }
    });
});
