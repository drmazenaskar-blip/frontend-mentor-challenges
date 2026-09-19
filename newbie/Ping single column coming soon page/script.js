const input = document.getElementById("emailInput");
const form = document.querySelector(".subscribe-form");
function validateInput(input) {
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

  const checkStatus = validateInput(input);

  if (checkStatus) {
    form.reset();
  }
});

input.addEventListener("input", () => {
  validateInput(input);
});
