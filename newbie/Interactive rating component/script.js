const ratingButtons = document.querySelectorAll(".btn-rating ");
const submitButton = document.getElementById("submit-btn");
const ratingCard = document.getElementById("rating-card");
const thanksCard = document.getElementById("thanks-card");
const selectedRatingSpan = document.getElementById("selected-rating");
const errorMsg = document.getElementById("error-msg");
const thanksHeading = document.querySelector("#thanks-heading");

let currentRating = 0;

// Handle clicks on the rating buttons
ratingButtons.forEach(function (button) {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove("selected"));
    button.classList.add("selected");
    currentRating = parseInt(button.value);
    if (currentRating > 0) {
      errorMsg.classList.remove("active");
      submitButton.removeAttribute("aria-describedby");
      submitButton.removeAttribute("aria-invalid", "true");
    }
  });
});

// Handle the submit button click
submitButton.addEventListener("click", () => {
  if (currentRating > 0) {
    selectedRatingSpan.textContent = currentRating;
    ratingCard.classList.remove("active");
    thanksCard.classList.add("active");
		thanksHeading.focus();
  } else {
    ratingCard.classList.remove("shake-card");
    errorMsg.classList.remove("active");

    void ratingCard.offsetWidth;

    ratingCard.classList.add("shake-card");
    errorMsg.classList.add("active");
    submitButton.setAttribute("aria-describedby", "error-msg");
    submitButton.setAttribute("aria-invalid", "true");
  }
});
