const claimBtn = document.querySelector('.claim-btn');
const form = document.querySelector('.form');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const password = document.getElementById('password')
const formComponent = document.getElementsByClassName('form-component');

claimBtn.addEventListener('click', e => {
    e.preventDefault();

    let formInputs = form.querySelectorAll('input');

    formInputs.forEach(formInput => {
        if (formInput.value === '') {
            formInput.parentNode.parentNode.classList.add('error');
            formInput.placeholder = '';
            if (formInput.type === "email") {
                formInput.placeholder = "email@example/com";
            }
        } else {
            formInput.parentElement.parentNode.classList.remove('error');
        }
    })
});








