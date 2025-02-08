// Return a class name in the BEM convention.
const BEM = (block, element, modifier) => {
  const BE = `${block}__${element}`;
  return modifier ? `${BE}--${modifier}` : BE;
}

// blocks, elements, and modifiers.
const formBlock = "email-form";
const rowElement = "row";
const inputElement = "input";
const errIconElement = "err-icon";
const errMessageElement = "err-msg";
const buttonElement = "btn";
const onErrModifier = "on-err";

// HTML elements
const form = document.getElementById("email-form");
const row = document.querySelector("." + BEM(formBlock, rowElement));
const input = document.querySelector("." + BEM(formBlock, inputElement));
const errIcon = document.querySelector("." + BEM(formBlock, errIconElement));
const errMessage = document.querySelector("." + BEM(formBlock, errMessageElement));
const submitButton = document.querySelector("." + BEM(formBlock, buttonElement));

// On window load, clear email input and error indicators.
window.addEventListener("load", (event) => {
  input.value = null;
  errIcon.classList.remove(BEM(formBlock, errIconElement, onErrModifier));
  errMessage.classList.remove(BEM(formBlock, errMessageElement, onErrModifier));
});

// Return true if email is a valid email address; false otherwise.
const isValidEmail = (email) => {
  const emailRegexp = /^\w+(\.\w+)*@\w+(\.\w+)*$/g;
  return email.match(emailRegexp) ? true : false;
};

// On form submit, perform client-side validation of the email address.
form.addEventListener("submit", (event) => {
  const email = input.value;
  if (isValidEmail(email)) {
    alert("Form data validated");
  } else {
    row.classList.add(BEM(formBlock, rowElement, onErrModifier));
    errIcon.classList.add(BEM(formBlock, errIconElement, onErrModifier));
    errMessage.classList.add(BEM(formBlock, errMessageElement, onErrModifier));
    event.preventDefault();
  }
});
