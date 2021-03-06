let counterValue = 0;

const actions = document.querySelectorAll('#counter');
const valueRef = document.querySelector('#value');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const decrementBtnRef = document.querySelector('[data-action="decrement"]');


incrementBtnRef.addEventListener('click', incrementValue);
decrementBtnRef.addEventListener('click', decrementValue);

function incrementValue() {
  counterValue += 1;
  renewalValue();
}

function decrementValue() {
  counterValue -= 1;
  renewalValue();
}

function renewalValue() {
  valueRef.textContent = counterValue;
}