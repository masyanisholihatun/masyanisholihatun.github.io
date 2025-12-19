console.log("GitHub Profile Loaded");

// Optional: Add some simple interaction
const avatar = document.getElementById('avatar');

if (avatar) {
    avatar.addEventListener('click', () => {
        alert("Hello! This is a static profile.");
    });
}

// Sparkle Effect Script
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Random position
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;

    // Random size
    const size = Math.random() * 3 + 1; // 1px to 4px
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;

    document.body.appendChild(sparkle);

    // Remove after animation
    setTimeout(() => {
        sparkle.remove();
    }, 2000);
}

// Sparkle effect removed as per request
// setInterval(createSparkle, 20);

// Fountain Effect on Click
document.addEventListener('click', (e) => {
    // Spawn 30 particles
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
        createFountainParticle(e.clientX, e.clientY);
    }
});

function createFountainParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('fountain-particle');
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 5 + 2; // Speed
    let vx = Math.cos(angle) * velocity;
    let vy = Math.sin(angle) * velocity;
    const gravity = 0.2; // Gravity pull

    let posX = x;
    let posY = y;
    let opacity = 1;

    function animate() {
        if (opacity <= 0) {
            particle.remove();
            return;
        }

        posX += vx;
        posY += vy;
        vy += gravity; // Apply gravity
        opacity -= 0.02; // Fade out

        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;
        particle.style.opacity = opacity;

        requestAnimationFrame(animate);
    }

    animate();
}
