import 'bootstrap';

"use strict";

/*
const progressStep = document.querySelectorAll('.progress-step');

const formStep = document.querySelectorAll('.form-step');

const btnSubmit = document.querySelector('.form-btn-submit');
const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const btnLeave = document.querySelector('.btn-leave');

let active = 1;

btnNext.addEventListener('click', () => {
    active++;
    if (active > progressStep.length) {
        active = progressStep.length;
    }
    updateProgress();
})

btnPrev.addEventListener('click', () => {
    active--;
    if (active < 1) {
        active = 1;
    }
    updateProgress();
})

const updateProgress = () => {
    console.log(`progressStep: ${progressStep.length}`);
    console.log(`active: ${active}`);

    // Toggle .progress-active class for each list item

    progressStep.forEach((step, i) => {
        if (i == (active - 1)) {
            step.classList.add('progress-active');
            formStep[i].classList.add('progress-active');
            console.log('i');
        }
    })
}
 */