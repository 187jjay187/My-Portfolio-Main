// Email Validartion in form (Check email is in lowercase else show error message)

function showMessage(input, message) {
  const msg = input.parentNode.querySelector('small');
  const emailInput = document.getElementById('email');
  msg.innerText = message;

  // update the class for the input
  msg.className = 'error';
  emailInput.className = 'error-box';
}

// Function to show error

function showError(input, message) {
  return showMessage(input, message, false);
}

// Check if email is in lowercase

function validateEmail(input, invalidMsg) {
  const email = input.value.trim();
  if (!(email === String(email).toLowerCase())) {
    return showError(input, invalidMsg);
  }
  return true;
}

const form = document.querySelector('#form-id');

const EMAIL_INVALID = 'Enter email in lowercase';

form.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  // validate the form

  const emailValid = validateEmail(form.elements.email, EMAIL_INVALID);

  // if valid, submit the form.

  if (emailValid) {
    form.submit();
  }
});