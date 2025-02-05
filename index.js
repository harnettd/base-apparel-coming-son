const getBESelector = (block, element) => {
  return `.${block}__${element}`;
};

const getBEMSelector = (block, element, modifier) => {
  return `.${getBESelector(block, element)}--${modifier}`;
};

const form = "email-form";

const input = document.querySelector(getBESelector(form, "input"));
const errIcon = document.querySelector(getBESelector(form, "err-icon"));
const errMessage = document.querySelector(getBESelector(form, "err-msg"));
const submitButton = document.querySelector(getBESelector(form, "btn"));

const isValidEmail = (email) => {
  return false;
};

submitButton.addEventListener("click", (event) => {
  const email = submitButton.value;
  console.log(`email: ${email}`)
  if (isValidEmail(email)) {
    alert("Good");
  } else {
    alert("Bad");
    event.preventDefault();
  }
});
