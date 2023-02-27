const nameLabel = document.querySelector ('span#name-output');
const input = document.querySelector('input#name-input');

input.addEventListener('input', onImputChange);

function onImputChange(event) {
    if (event.currentTarget.value === '' ) {
        nameLabel.textContent = 'Anonymous'
    } else { nameLabel.textContent = event.currentTarget.value;}
}