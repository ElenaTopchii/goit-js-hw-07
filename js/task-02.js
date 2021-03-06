const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const containerForInfredients = document.querySelector('#ingredients')

const makeLiforIngredients = newIngredients => {
    return newIngredients.map((ingredient) => {
        const newLiElementRef = document.createElement('li');
        newLiElementRef.textContent = `${ingredient}`;
        return newLiElementRef;
    })

}

const liForIngredients = makeLiforIngredients(ingredients)
    containerForInfredients.append(...liForIngredients);
