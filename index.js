// Return block__element class name.
const getBEClass = (block, element) => {
  return `${block}__${element}`;
};

// Return block__element--modifier class name.
const getBEMClass = (block, element, modifier) => {
  return `${getBEClass(block, element)}--${modifier}`;
};

// blocks, elements, and modifiers.
const formBlock = "email-form";
const inputElement = "input";
const errIconElement = "err-icon";
const errMessageElement = "err-msg";
const buttonElement = "btn";
const onErrModifier = "on-err";

// HTML elements
const input = document.querySelector("." + getBEClass(formBlock, inputElement));
const errIcon = document.querySelector("." + getBEClass(formBlock, errIconElement));
const errMessage = document.querySelector("." + getBEClass(formBlock, errMessageElement));
const submitButton = document.querySelector("." + getBEClass(formBlock, buttonElement));

// On window load, clear email input and error indicators.
window.addEventListener("load", (event) => {
  input.value = null;
  errIcon.classList.remove(getBEMClass(formBlock, errIconElement, onErrModifier));
  errMessage.classList.remove(getBEMClass(formBlock, errMessageElement, onErrModifier));
});

// Return true if email is a valid email address; false otherwise.
const isValidEmail = (email) => {
  const emailRegexp = /^\w+(\.\w+)*@\w+(\.\w+)*$/g;
  return email.match(emailRegexp) ? true : false;
};

// On form submit, perform client-side validation of the email address.
submitButton.addEventListener("click", (event) => {
  const email = input.value;
  if (isValidEmail(email)) {
    alert("Form data validated");
  } else {
    errIcon.classList.add(getBEMClass(formBlock, errIconElement, onErrModifier));
    errMessage.classList.add(getBEMClass(formBlock, errMessageElement, onErrModifier));
    event.preventDefault();
  }
});
