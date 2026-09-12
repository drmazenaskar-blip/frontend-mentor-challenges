let buttons = document.querySelectorAll(".faq-question");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let feqQu = e.currentTarget.parentElement.querySelector(".faq-answer");
    let icon = e.currentTarget.querySelector(".toggle-icon");

    if (feqQu.classList.contains("show")) {
      feqQu.classList.remove("show");

      icon.classList.remove("fa-circle-minus");
      icon.classList.add("fa-circle-plus");
    } else {
      buttons.forEach(function (button) {
        let feq = button.parentElement.querySelector(".faq-answer");
        let icon = button.querySelector(".toggle-icon");

        feq.classList.remove("show");

        icon.classList.remove("fa-circle-minus");
        icon.classList.add("fa-circle-plus");
      });

      feqQu.classList.add("show");

      icon.classList.remove("fa-circle-plus");
      icon.classList.add("fa-circle-minus");
    }
  });
});
