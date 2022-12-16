const form = document.querySelector("form.feedback-form");
const email = form.elements.email;
const message = form.elements.message;
let feedback;

if (localStorage.getItem("feedback") !== null) {
    feedback = JSON.parse(localStorage.getItem("feedback"));
    email.value = feedback.email;
    message.value = feedback.message;
}

import throttle from 'lodash.throttle';

form.addEventListener("input", throttle(() => {
    feedback = {
        email: email.value,
        message: message.value,
    };
    localStorage.setItem("feedback", JSON.stringify(feedback));
},500));

form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(feedback);
    localStorage.clear();
    form.reset();
});
