const validationInputRef = document.querySelector('#validation-input');
const minInputlengthRef = + validationInputRef.getAttribute('data-length');

validationInputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let inputValue = event.target.value.length;
  if (inputValue === minInputlengthRef) {
    toAddClass('valid');
    toRemoveClass('invalid');
  }
  if (inputValue !== minInputlengthRef) {
    toAddClass('invalid');
    toRemoveClass('valid');
  }
  if (inputValue === 0) {
    toRemoveClass('valid');
    toRemoveClass('invalid');
  }

  function toAddClass (nameClass) {
    event.target.classList.add(`${nameClass}`)
  }
  function toRemoveClass (nameClass) {
    event.target.classList.remove(`${nameClass}`)
  }
}
