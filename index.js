const getBEClass = (block, element) => {
  return `${block}__${element}`;
};

const getBEMClass = (block, element, modifier) => {
  return `${getBEClass(block, element)}--${modifier}`;
};

const formBlock = "email-form";
const inputElement = "input";
const errIconElement = "err-icon";
const errMessageElement = "err-msg";
const buttonElement = "btn";
const onErrModifier = "on-err";

const input = document.querySelector("." + getBEClass(formBlock, inputElement));
const errIcon = document.querySelector("." + getBEClass(formBlock, errIconElement));
const errMessage = document.querySelector("." + getBEClass(formBlock, errMessageElement));
const submitButton = document.querySelector("." + getBEClass(formBlock, buttonElement));

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

submitButton.addEventListener("click", (event) => {
  const email = input.value;
  console.log(`email: ${email}`)
  if (isValidEmail(email)) {
    alert("Form data validated");
  } else {
    errIcon.classList.add(getBEMClass(formBlock, errIconElement, onErrModifier));
    errMessage.classList.add(getBEMClass(formBlock, errMessageElement, onErrModifier));
    event.preventDefault();
  }
});
