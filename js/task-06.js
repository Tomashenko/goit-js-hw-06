const input = document.querySelector('input#validation-input');

input.addEventListener('focus', onImputFocus);

input.addEventListener('blur', onImputBlur);

input.addEventListener('input', onImputChange);

const dataLength = 6;

function onImputFocus() {
    console.log('Отримали фокус');
}

function onImputBlur() {
    console.log('Втратили фокус');
    onImputChange (event);
}

function onImputChange(event) {
    console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === dataLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');

    }
    else {input.classList.add('invalid')
    input.classList.remove('valid');
};

};
