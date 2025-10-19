document.addEventListener('DOMContentLoaded', function() {
    const missBtn = document.getElementById('missBtn');
    const importantBtn = document.getElementById('importantBtn');
    const messageDisplay = document.getElementById('messageDisplay');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    // Messages
    const missMessage = "I miss you every single day, my dear friend. Your presence brings so much joy and warmth to my life. Distance can't diminish the bond we share.";
    const importantMessage = "You are incredibly important to me. Your friendship is a treasure I cherish deeply. You make the world a better place just by being in it. Every moment with you is a blessing, and I am grateful for your love and support. You inspire me to be a better person every day.";

    // Button event listeners
    missBtn.addEventListener('click', function() {
        messageDisplay.textContent = '';
        messageDisplay.style.display = 'block';
        typeWriter(missMessage, messageDisplay);
    });

    importantBtn.addEventListener('click', function() {
        messageDisplay.textContent = '';
        messageDisplay.style.display = 'block';
        typeWriter(importantMessage, messageDisplay);
    });

    // Typewriter effect function
    function typeWriter(text, element, speed = 50) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Slideshow
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Auto slideshow
    setInterval(nextSlide, 5000);

    // Initialize first slide
    showSlide(currentSlide);

    // Fireworks animation
    function createFirework() {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.animationDelay = Math.random() * 2 + 's';
        document.querySelector('.fireworks').appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }

    // Create fireworks periodically
    setInterval(createFirework, 1000);

    // Add sparkle effect to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.boxShadow = '0 0 10px #fbbf24';
        });
        button.addEventListener('mouseleave', () => {
            button.style.boxShadow = 'none';
        });
    });

    // Add floating hearts effect
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    setInterval(createHeart, 2000);
});
