document.addEventListener('DOMContentLoaded', function() {
    const titleElement = document.querySelector('title');
    const text = "Mareao"; 
    const typingSpeed = 150;
    const pauseDuration = 2000; 

    let index = 0;
    let isTyping = true;

    function typewriterEffect() {
        if (isTyping) {
            titleElement.textContent = text.substring(0, index + 1);
            index++;

            if (index >= text.length) {
                isTyping = false;
                setTimeout(typewriterEffect, pauseDuration);
            } else {
                setTimeout(typewriterEffect, typingSpeed);
            }
        } else {
            titleElement.textContent = text.substring(0, index);
            index--;

            if (index < 0) {
                isTyping = true;
                setTimeout(typewriterEffect, typingSpeed); 
            } else {
                setTimeout(typewriterEffect, typingSpeed);
            }
        }
    }

    typewriterEffect();
});