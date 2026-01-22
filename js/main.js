// BARRY: THE CHILLEST CAPYBARA IN THE WORLD
// Fun interactions for Oscar's comic book website!

// Add some fun animations when characters scroll into view
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Apply to all character cards
    const cards = document.querySelectorAll('.character-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Fun hover sounds simulation with visual feedback
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.2s ease';
        });
    });

    // Add random cupcake emojis floating occasionally
    function createFloatingCupcake() {
        const cupcake = document.createElement('div');
        cupcake.innerHTML = '🧁';
        cupcake.style.cssText = `
            position: fixed;
            font-size: ${20 + Math.random() * 30}px;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            pointer-events: none;
            z-index: 9999;
            animation: floatUp 8s linear forwards;
        `;
        document.body.appendChild(cupcake);

        setTimeout(() => cupcake.remove(), 8000);
    }

    // Add the float up animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-120vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Create a floating cupcake every few seconds
    setInterval(createFloatingCupcake, 4000);

    // Create one immediately
    setTimeout(createFloatingCupcake, 1000);

    // Add click effect on character images
    const characterImages = document.querySelectorAll('.character-image');
    characterImages.forEach(img => {
        img.addEventListener('click', function() {
            this.style.animation = 'none';
            this.offsetHeight; // Trigger reflow
            this.style.animation = 'wiggle 0.5s ease';
        });
    });

    // Add wiggle animation
    const wiggleStyle = document.createElement('style');
    wiggleStyle.textContent = `
        @keyframes wiggle {
            0%, 100% { transform: rotate(0deg); }
            25% { transform: rotate(-10deg); }
            75% { transform: rotate(10deg); }
        }
    `;
    document.head.appendChild(wiggleStyle);

    // Fun console message for Oscar!
    console.log('%c🦫 BARRY SAYS: Stay chill! 🧁',
        'font-size: 24px; color: #8B7355; font-family: Comic Sans MS;');
    console.log('%cCreated by OSCAR - The coolest comic book creator!',
        'font-size: 16px; color: #FF6B6B;');
});
