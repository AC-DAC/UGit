// Generate random stars
const starsContainer = document.querySelector('.stars');
const starCount = 200;

for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.width = `${Math.random() * 3}px`;
    star.style.height = star.style.width;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starsContainer.appendChild(star);
} 