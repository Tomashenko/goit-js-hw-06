const form = document.querySelector('.login-form');
const input = document.querySelector('.login-form > input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    console.log(formData);

    formData.forEach((value, name) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
        if (value === ''){
            alert ('Будь-ласка заповніть всі поля')
        }
    });

    form.reset();
}



