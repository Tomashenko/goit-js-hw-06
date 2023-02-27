const form = document.querySelector('.login-form');
const input = document.querySelector('.login-form > input');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;

    const email = formEl.email.value;

    const password = formEl.password.value;

    if (email === '' || password === ''){
        alert ('Будь-ласка заповніть всі поля')
    }

    const formData = {
        email,
        password
    };
    
    console.log(formData);
  
    form.reset();
}



