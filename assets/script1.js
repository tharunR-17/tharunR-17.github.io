const textElement = document.getElementById('text');
const words = ["Problem Solver. ", "Web Developer. ", "Tech Enthusiast. ", "Freelancer. "];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 150;
const erasingSpeed = 100;
const newWordDelay = 1500;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => isDeleting = true, newWordDelay);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(type, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
    if (words.length) type();
});
