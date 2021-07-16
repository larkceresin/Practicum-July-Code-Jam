// Select the elements from the DOM
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav__list");
const navLinks = document.querySelectorAll(".nav__link");
const form = document.querySelector('.form')
const emailInput = form.querySelector('.form__email-input');
const message = form.querySelector('.form__textarea');
const submitButton = form.querySelector('.form__btn_type_submit')

// Function to toggle hamburger
const toggleHamburger = () => {
  hamburger.classList.toggle("hamburger_active");
  navList.classList.toggle("nav__list_active");
}

hamburger.addEventListener("click", toggleHamburger);

// Function to close the mobile menu if any of the menu link is clicked
const closeMobileMenu = () => {
  hamburger.classList.remove("hamburger_active");
  navList.classList.remove("nav__list_active");
}

navLinks.forEach(navLink => navLink.addEventListener("click", closeMobileMenu));

// form validation
function validate() {
  submitButton.disabled = true;
  if (emailInput.validity.valid && message.validity.valid) {
    submitButton.disabled = false
  }
}
emailInput.addEventListener('keypress', validate);
message.addEventListener('keypress', validate);