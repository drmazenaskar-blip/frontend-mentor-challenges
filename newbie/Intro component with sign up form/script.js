const form = document.querySelector(".signup-form");
const fields = document.querySelectorAll(".input-group  input");
const password = document.querySelector("#password");
const eyeIcon = document.querySelector(".fa-eye");
// console.log(password)

function checkValiedInput(input) {
  const inputParent = input.parentElement;

  if (input.value.trim() === "" || !input.validity.valid) {
    inputParent.classList.add("error");
    input.setAttribute("aria-invalid", "true");
    return false;
  } else {
    inputParent.classList.remove("error");
    input.removeAttribute("aria-invalid");
    return true;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let checkStatus = true;

  fields.forEach(function (input) {
    let status = checkValiedInput(input);

    if (!status) {
      checkStatus = false;
    }
  });

  if (checkStatus) {
    form.reset();
  }
});
fields.forEach(function (input) {
  input.addEventListener("input", () => {
    checkValiedInput(input);
  });
});
// -----Password Input-------------------------------------
function togglePassword() {
  password.type = password.type === "password" ? "text" : "password";
}
function showPasswordIcon() {
  eyeIcon.classList.toggle("display", password.value.trim() !== "");
}
password.oninput = showPasswordIcon;
eyeIcon.onclick = togglePassword;

// ===========================================================
