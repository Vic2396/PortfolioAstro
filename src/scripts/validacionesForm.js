let nombre = '';
let telefono = '';
let email = '';

const formContact = document.querySelector('#formContact');
const inputNombre = document.querySelector('#nombre');
const inputTelefono = document.querySelector('#tel');
const inputEmail = document.querySelector('#email');

window.onload = () => {
    inputNombre.value = '';
    inputTelefono.value = '';
    inputEmail.value = '';
}

inputNombre.addEventListener('input', (event) => {
    nombre = event.target.value;
    cleanError('error-nombre');
});

inputTelefono.addEventListener('input', (event) => {
    telefono = event.target.value;
    cleanError('error-telefono');
});

inputEmail.addEventListener('input', (event) => {
    email = event.target.value;
    cleanError('error-email');
});

function validateName(name) {
    const patron = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s']+$/;
    if (!patron.test(name)) {
        showError('error-nombre', 'x');
        return false;
    }
    return true;
}

function validateTelfono(tel) {
    const patron = /^\+?\d{7,15}$/;
    if (!patron.test(tel)) {
        showError('error-telefono', 'x');
        return false;
    }
    return true;
}

function validateEmail(email) {
    const patron = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!patron.test(email)) {
        showError('error-email', 'x');
        return false;
    }
    return true;
}

function showError(id, mensaje) {
    const errorElement = document.querySelector(`#${id}`);
    if (errorElement) errorElement.innerText = mensaje;
}

function cleanError(id) {
    const errorElement = document.querySelector(`#${id}`);
    if (errorElement) errorElement.innerText = '';
}

formContact.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombreValido = validateName(nombre);
    const telefonoValido = validateTelfono(telefono);
    const emailValido = validateEmail(email);

    if (nombreValido && telefonoValido && emailValido) {
        alert('Formulario enviado');
    }
});
