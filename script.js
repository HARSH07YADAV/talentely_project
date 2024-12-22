// FAQ Accordion
document.querySelectorAll('.faq-item h3').forEach((item) => {
    item.addEventListener('click', () => {
        const sibling = item.nextElementSibling;
        sibling.style.display = sibling.style.display === 'block' ? 'none' : 'block';
    });
});

// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth',
        });
    });
});

                    // Select elements
                    const ball = document.getElementById('ball');
                    const logo = document.getElementById('logo');
            
                    // Variables for the "O"
                    let centerX = 0;
                    let centerY = 0;
                    const radius = 40; // Radius of the ball's rotation
            
                    let angle = 0; // Initial angle
            
                    function setCircleProperties() {
                        // Get logo position and size
                        const logoRect = logo.getBoundingClientRect();
            
                        // Adjust these values based on the "O" position inside the logo
                        centerX = logoRect.left + logoRect.width * 0.88; // X position of "O" (85% of width)
                        centerY = logoRect.top + logoRect.height * 0.43;  // Y position of "O" (50% of height)
                    }
            
                    function rotateBall() {
                        // Update position dynamically to stay consistent with "O"
                        setCircleProperties();
            
                        // Calculate the ball's position on the circular path
                        const x = centerX + radius * Math.cos(angle);
                        const y = centerY + radius * Math.sin(angle);
            
                        // Set ball position
                        ball.style.left = `${x - ball.offsetWidth / 2}px`;
                        ball.style.top = `${y - ball.offsetHeight / 2}px`;
            
                        // Increment angle for smooth rotation
                        angle += 0.03;
            
                        // Loop animation
                        requestAnimationFrame(rotateBall);
                    }
            
                    // Initialize the animation once the page loads
                    window.onload = () => {
                        setCircleProperties();
                        rotateBall();
                    };
            
                    // Update properties dynamically on window resize
                    window.onresize = setCircleProperties;
                