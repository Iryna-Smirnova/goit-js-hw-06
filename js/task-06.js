const input = document.querySelector('#validation-input');
const inputValueLength = input.dataset.length;

function validateInput() {
  const inputValue = input.value;
  const isValid = inputValue.length === Number(inputValueLength);

  input.classList.remove('valid', 'invalid');

  if (isValid) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}

input.addEventListener('blur', validateInput);