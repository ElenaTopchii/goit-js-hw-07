const itemsRef = document.querySelectorAll('.item');
console.log(`В списке ${itemsRef.length} категории.`);


itemsRef.forEach(element => {
  console.log(`Категория: ${element.firstElementChild.textContent}`);
    
  console.log(`Количество элементов: ${element.querySelectorAll('li').length}`);
});
