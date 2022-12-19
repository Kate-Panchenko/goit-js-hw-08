import throttle from "lodash.throttle";

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('.feedback-form textarea')
const LOCALSTORAGE_KEY = "feedback-form-state";
let formData = {};


form.addEventListener("input", throttle(saveMessage, 500));

function saveMessage(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function updateForm() {
    let data = localStorage.getItem(LOCALSTORAGE_KEY);

    if (data) {
        data = JSON.parse(data);

        Object.entries(data).forEach(([name, value]) => {
            formData[name] = value;
            form.elements[name].value = value;
    });
    }
}

updateForm();
