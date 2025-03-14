/**
 * Hero Animations Module
 * Handles animations for the hero section elements
 */

/**
 * Initialize hero animations
 * Coordinates animations for the hero section elements
 */
export function initHeroAnimations() {
    // Get the elements to animate
    const heroSection = document.getElementById('section1');
    const headlinesContainer = document.querySelector('.hero-headlines-container');
    const personOverlayImage = document.querySelector('.person-overlay-image');
    const ctaContainer = document.querySelector('.hero-cta-container');
    const statCardContainer = document.querySelector('.stat-card-container');

    if (!heroSection || !headlinesContainer || !personOverlayImage) return;

    // Trigger animation after a small delay to ensure DOM is fully rendered
    setTimeout(() => {
        // Animate hero section sliding down
        heroSection.classList.add('animate-in');

        // Animate person overlay zooming out
        personOverlayImage.classList.add('animate-in');

        // Delay the headlines, CTA, and stat card animations until hero section is in final position
        // Hero section animation takes 1.5s
        setTimeout(() => {
            // Animate headlines, CTA, and stat card container
            headlinesContainer.classList.add('animate-in');

            if (ctaContainer) {
                ctaContainer.classList.add('animate-in');
            }

            if (statCardContainer) {
                statCardContainer.classList.add('animate-in');
            }

            // After headlines container is in position, slide the wrapper to the left
            // Headlines container animation takes 1.3s
            setTimeout(() => {
                const headlinesWrapper = document.querySelector('.hero-headlines-wrapper');
                const heroHeadline1 = document.getElementById('hero-headline-1');

                if (headlinesWrapper) {
                    headlinesWrapper.classList.add('slide-left');
                }

                if (heroHeadline1) {
                    heroHeadline1.classList.add('slide-right');
                }
            }, 1300);
        }, 1500);
    }, 100);
}
