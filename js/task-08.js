const email = document.querySelector('[name="email"]');
const password = document.querySelector('[name="password"]');
const form = document.querySelector('.login-form');
const obgect = {};
form.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (email.value === '' || password.value === '') {
        alert('Всі поля мають бути заповненими');
    } else {
        obgect[email.name] = email.value;
        obgect[password.name] = password.value;
        console.log(obgect);
        form.reset();
    }
});