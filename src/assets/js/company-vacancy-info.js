"use strict";

// Step form
const prevButton = document.querySelector(".btn-prev");
const nextButton = document.querySelector(".btn-next");
const submitButton = document.querySelector(".btn-submit");
const steps = document.querySelectorAll(".my-step");
const formSteps = document.querySelectorAll(".form-step");
let enabled = 1;

nextButton.addEventListener("click", () => {
    enabled++;
    if (enabled > steps.length) {
        enabled = steps.length;
    }
    updateProgress();
});

prevButton.addEventListener("click", () => {
    enabled--;
    if (enabled < 1) {
        enabled = 1;
    }
    updateProgress();
});

const updateProgress = () => {
    // Add .enabled class for each list item
    steps.forEach((step, i) => {
        if (i == (enabled - 1)) {
            step.classList.add('text-primary');
            formSteps[i].classList.add('display-form');
        } else {
            step.classList.remove('text-primary');
            formSteps[i].classList.remove('display-form');
        }
    });

    // Enable or disable prev and next buttons
    if (enabled === 1) {
        prevButton.classList.add("d-none");
        submitButton.classList.add("d-none");
        nextButton.classList.remove("d-none");
    } else {
        prevButton.classList.remove("d-none");
        submitButton.classList.remove("d-none");
        nextButton.classList.add("d-none");
    }
};
