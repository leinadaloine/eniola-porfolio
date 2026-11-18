// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// CLOSE MENU AFTER CLICKING A LINK

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// TYPING EFFECT

const typingText = document.querySelector(".typing");

const words = [
    "Web Developer.",
    "Creative Thinker.",
    "Problem Solver."
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function typeEffect() {

    const currentWord = words[wordIndex];

    if (deleting) {

        typingText.textContent =
            currentWord.substring(0, characterIndex - 1);

        characterIndex--;

    } else {

        typingText.textContent =
            currentWord.substring(0, characterIndex + 1);

        characterIndex++;

    }


    let speed = deleting ? 60 : 110;


    if (!deleting && characterIndex === currentWord.length) {

        deleting = true;
        speed = 1200;

    }

    else if (deleting && characterIndex === 0) {

        deleting = false;

        wordIndex++;

        if (wordIndex === words.length) {
            wordIndex = 0;
        }

        speed = 400;

    }


    setTimeout(typeEffect, speed);

}

typeEffect();


// SCROLL REVEAL

const revealElements = document.querySelectorAll(
    ".hero-content, .hero-image, .section-heading, .about-container, .skill-card, .project-card, .contact-container"
);


const observer = new IntersectionObserver(function (entries) {

    entries.forEach(function (entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});


// AUTOMATIC FOOTER YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();