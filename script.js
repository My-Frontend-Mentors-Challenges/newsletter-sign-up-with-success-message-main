const formDiv = document.querySelector("form");
const email = document.getElementById("email");
const emailError = document.querySelector(".error-msg");
const mainSubmit = document.getElementById("main-submit");
const mainSuccess = document.getElementById("main-success");
const dismissBtn = mainSuccess.querySelector("button");
mainSuccess.classList.add("hide");

dismissBtn.addEventListener("click", () => {
  mainSuccess.classList.add("hide");
  mainSubmit.classList.remove("hide");
});

formDiv.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!email.validity.valid) {
    email.classList.add("input-invalid");
    return;
  }
  mainSubmit.classList.add("hide");
  mainSuccess.classList.remove("hide");
});

email.addEventListener("input", () => {
  if (email.validity.valid) {
    emailError.textContent = "";
    email.classList.remove("input-invalid");
  } else if (email.validity.typeMismatch) {
    email.classList.add("input-invalid");
    emailError.textContent = "Valid email required";
  } else if (email.validity.valueMissing) {
    email.classList.add("input-invalid");
    emailError.textContent = "Email required";
  }
});
