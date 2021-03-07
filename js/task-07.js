const inputRef = document.querySelector('#font-size-control');

const spanRef = document.querySelector('#text');
inputRef.addEventListener('input', onInputRange);

function onInputRange(evens) {
  let startValueRange = +evens.target.value;

  spanRef.style.fontSize = `${startValueRange + 50}%`;
}
