const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;
const variationValue = document.querySelector('span#value');

incrementBtn.addEventListener('click', function () {
    counterValue += 1;
    variationValue.textContent = counterValue;
});

decrementBtn.addEventListener('click', function () {
    counterValue -= 1;
    variationValue.textContent = counterValue;
});












