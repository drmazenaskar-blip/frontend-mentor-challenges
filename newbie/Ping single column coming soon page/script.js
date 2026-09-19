const input = document.getElementById("emailInput");
const form = document.querySelector(".subscribe-form");
function checkValiedInput(input) {
  const inputParent = input.parentElement;
  if (input.value.trim() === "" || !input.validity.valid) {
    inputParent.classList.add("error");
    input.setAttribute("aria-invalid", "true");
    input.setAttribute("aria-describedby", "errorMsg");
    return false;
  } else {
    inputParent.classList.remove("error"); // ✅
    input.removeAttribute("aria-invalid", "true");
    input.removeAttribute("aria-describedby", "errorMsg");
    return true;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let checkStatus = checkValiedInput(input);
  if (checkStatus) {
    form.reset();
  }
});

input.addEventListener("input", () => {
  checkValiedInput(input);
});
