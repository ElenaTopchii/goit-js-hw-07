const ref = {
  input: document.querySelector('#name-input'),
  textSpan: document.querySelector('#name-output'),
};

ref.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  return event.currentTarget.value === ''
    ? (ref.textSpan.textContent = 'незнакомец')
    : (ref.textSpan.textContent = event.currentTarget.value);
}