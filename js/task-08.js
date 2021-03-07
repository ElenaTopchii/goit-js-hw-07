const controlsWrapperRef = document.querySelector('#controls');
const inputValueRef = controlsWrapperRef.firstElementChild;
const createBtnRef = inputValueRef.nextElementSibling;
const clearBtnRef = createBtnRef.nextElementSibling;
const boxesWrapperRef = document.querySelector('#boxes');

let amount;
controlsWrapperRef.addEventListener('input', onVelueBoxes);

function onVelueBoxes (evens) {
  amount = + evens.target.value;
  
  return amount;
}
console.log(amount)

createBtnRef.addEventListener('click', function () {
 if ( amount === undefined ) {
   amount = 0
 }
  const boxes = createBoxes (amount);
  boxesWrapperRef.append(...boxes);
});

function createBoxes (amount) {
  return [...Array(amount)]
    .map((_, idx) => ++idx)
    .map(i => {
      const newDivBoxes = document.createElement('div');
      newDivBoxes.style.backgroundColor = `${
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      }`;
      newDivBoxes.style.width = `${(i - 1) * 10 + 30}px`;
      newDivBoxes.style.height = `${(i - 1) * 10 + 30}px`;
      newDivBoxes.style.marginTop = `${30}px`;

      return newDivBoxes;
    });
}
clearBtnRef.addEventListener('click', function () {
  boxesWrapperRef.innerHTML = '';
});
