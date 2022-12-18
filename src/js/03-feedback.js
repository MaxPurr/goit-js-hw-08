const form = document.querySelector("form.feedback-form");
let feedback = {};

if (localStorage.getItem("feedback") !== null) {
    try {
        feedback = JSON.parse(localStorage.getItem("feedback"));
        for (let key in feedback) {
            form.elements[key].value = feedback[key];
        }
    } catch (error) {
        console.error(error);
    }
}

import throttle from 'lodash.throttle';

form.addEventListener("input", throttle((e) => {
    feedback[e.target.name] = e.target.value;
    localStorage.setItem("feedback", JSON.stringify(feedback));
},500));

form.addEventListener("submit", (event) => {
    if (Object.keys(feedback).length != 0) {
        event.preventDefault();
        console.log(feedback);
        localStorage.clear();
        feedback = {};
        form.reset();
    }
});
