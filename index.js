const faqQustion = document.querySelectorAll(".faq-qustion");
const faqAnswer = document.querySelectorAll(".faq-answer");

for (let i = 0; i < faqQustion.length; i++) {
    faqQustion[i].addEventListener("click", openfunc);

    function openfunc() {
        if (faqAnswer[i].classList.contains("hidden")) {
            faqAnswer[i].classList.replace("hidden", "open");
        } else {
            faqAnswer[i].classList.replace("open", "hidden");
        }
    }
}
