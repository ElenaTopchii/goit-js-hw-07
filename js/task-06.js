const validationInputRef = document.querySelector('#validation-input');
const minInputlengthRef = + validationInputRef.getAttribute('data-length');

validationInputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let inputValue = event.target.value.length;
  if (inputValue === minInputlengthRef) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  }
  if (inputValue !== minInputlengthRef) {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
  if (inputValue === 0) {
    event.target.classList.remove('valid');
    event.target.classList.remove('invalid');
  }
}
