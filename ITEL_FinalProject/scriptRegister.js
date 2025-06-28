function createAccount() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const email = document.getElementById("email");

  const usernameRequired = document.getElementById("usernameRequired");
  const passwordRequired = document.getElementById("passwordRequired");
  const confirmPasswordRequired = document.getElementById("confirmPasswordRequired");
  const emailRequired = document.getElementById("emailRequired");

  // Reset previous errors
  [username, password, confirmPassword].forEach(el => el.classList.remove("error"));
  [usernameRequired, passwordRequired, confirmPasswordRequired].forEach(el => el.style.display = "none");

  let hasError = false;

  if (username.value.trim() === "") {
    username.classList.add("error");
    usernameRequired.style.display = "inline";
    hasError = true;
  }

  if (password.value.trim() === "") {
    password.classList.add("error");
    passwordRequired.style.display = "inline";
    hasError = true;
  }

  if (email.value.trim() === "") {
    email.classList.add("error");
    emailRequired.style.display = "inline";
    hasError = true;
  }

  if (confirmPassword.value.trim() === "") {
    confirmPassword.classList.add("error");
    confirmPasswordRequired.style.display = "inline";
    hasError = true;
  }

  if (password.value && confirmPassword.value && password.value !== confirmPassword.value) {
    alert("❌ Passwords do not match!");
    confirmPassword.classList.add("error");
    hasError = true;
  }

  if (hasError) {
    console.log("⚠️ Account creation failed");
    return;
  }

  alert("✅ Account created successfully!");
}

function goToLogin() {
  window.location.href = "index.html";
}

// Clear error as user types
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", () => {
      input.classList.remove("error");
      const msg = document.getElementById(input.id + "Required");
      if (msg) msg.style.display = "none";
    });
  });
});
