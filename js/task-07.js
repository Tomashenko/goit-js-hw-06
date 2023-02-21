const label = document.querySelector ('span#text');
const input = document.querySelector('input#font-size-control');

input.addEventListener('input', onImputChange);

function onImputChange() {
console.log(label.textContent.fontsize);
label.style.fontSize = input.value + 'px';
}