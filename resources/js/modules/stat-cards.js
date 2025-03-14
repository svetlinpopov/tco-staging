/**
 * Stat Cards Module
 */

/**
 * Initialize stat cards functionality
 */
export function initStatCards() {
    const containers = document.querySelectorAll('.stat-card-container');

    containers.forEach(container => {
        const dots = container.querySelectorAll('.dot');
        const cards = container.querySelectorAll('.stat-card');
        let currentIndex = 0;
        let isTransitioning = false;
        let rotationTimer = null;
        const transitionDuration = 500;

        // Function to change the active card
        function changeCard(newIndex) {
            if (isTransitioning || newIndex === currentIndex) return;

            // Set transitioning state
            isTransitioning = true;

            // Hide current card
            cards[currentIndex].classList.remove('active');

            // Update dots
            dots.forEach((dot, i) => {
                if (i === newIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });

            // After transition, show new card
            setTimeout(() => {
                currentIndex = newIndex;
                cards[currentIndex].classList.add('active');

                // Reset transitioning state
                setTimeout(() => {
                    isTransitioning = false;
                }, transitionDuration);
            }, transitionDuration);
        }

        // Set up automatic rotation
        function startRotation() {
            stopRotation();
            rotationTimer = setInterval(() => {
                if (!isTransitioning) {
                    changeCard((currentIndex + 1) % cards.length);
                }
            }, 5000);
        }

        function stopRotation() {
            if (rotationTimer) {
                clearInterval(rotationTimer);
                rotationTimer = null;
            }
        }

        // Initialize - ensure first card and dot are active
        cards.forEach((card, i) => {
            if (i === 0) {
                card.classList.add('active');
            } else {
                card.classList.remove('active');
            }
        });

        dots.forEach((dot, i) => {
            if (i === 0) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }

            // Add click handler to each dot
            dot.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Dot clicked', i);
                stopRotation();
                changeCard(i);

                // Resume rotation after transition
                setTimeout(startRotation, transitionDuration * 2);
            });
        });

        // Handle container hover
        container.addEventListener('mouseenter', stopRotation);
        container.addEventListener('mouseleave', startRotation);

        // Handle visibility changes
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopRotation();
            } else {
                startRotation();
            }
        });

        // Start rotation
        startRotation();
    });
}

/**
 * Register Alpine component for stat cards
 */
export function registerStatCardsComponent() {
    // Empty function to maintain compatibility
    if (window.Alpine) {
        window.Alpine.data('statCards', () => ({}));
    }
}
