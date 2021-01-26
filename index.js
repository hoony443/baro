const faqQustion1 = document.querySelector(".faq-qustion--1");
const faqAnswer1 = document.querySelector(".faq-answer--1");
const faqQustion2 = document.querySelector(".faq-qustion--2");
const faqAnswer2 = document.querySelector(".faq-answer--2");
const faqQustion3 = document.querySelector(".faq-qustion--3");
const faqAnswer3 = document.querySelector(".faq-answer--3");


function openAnswer1() {
    console.log(faqAnswer1);
    if (faqAnswer1.classList.contains("hidden")) {
        faqAnswer1.classList.replace("hidden", "open");
    } else {
        faqAnswer1.classList.replace("open", "hidden");
    }
}
function openAnswer2() {
    console.log(faqAnswer2);
    if (faqAnswer2.classList.contains("hidden")) {
        faqAnswer2.classList.replace("hidden", "open");
    } else {
        faqAnswer2.classList.replace("open", "hidden");
    }
}
function openAnswer3() {
    console.log(faqAnswer3);
    if (faqAnswer3.classList.contains("hidden")) {
        faqAnswer3.classList.replace("hidden", "open");
    } else {
        faqAnswer3.classList.replace("open", "hidden");
    }
}

faqQustion1.addEventListener("click", openAnswer1);
faqQustion2.addEventListener("click", openAnswer2);
faqQustion3.addEventListener("click", openAnswer3); 