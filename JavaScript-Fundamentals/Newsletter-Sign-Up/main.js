// Defining variables
const signUp = document.getElementById("signUp");
const successMessage = document.getElementById("successMessage");

const form = document.getElementById("form");
const email = document.getElementById("email");
const emailError = document.getElementById("emailError");
const submitBtn = document.getElementById("submitBtn");

const currentEmail = document.getElementById("currentEmail");
const dismissBtn = document.getElementById("dismissBtn");

// toggle Sections Function
const toggleSections = (...element) => {
  element.forEach((el) => {
    el.classList.toggle("flex");
    el.classList.toggle("hidden");
  });
};

function handleSubmit(e) {
  e.preventDefault();

  const emailValue = email.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (regex.test(emailValue)) {
    currentEmail.innerText = emailValue;
    email.classList.remove("bg-red-500/15", "text-red-500", "outline-red-500");

    toggleSections(signUp, successMessage);
  } else {
    email.classList.add("bg-red-500/15", "text-red-500", "outline-red-500");
    emailError.innerText = "valid email required";
  }
}

form.addEventListener("submit", handleSubmit);
dismissBtn.addEventListener("click", () => {
  email.value = "";
  emailError.innerText = "";
  toggleSections(signUp, successMessage);
});
