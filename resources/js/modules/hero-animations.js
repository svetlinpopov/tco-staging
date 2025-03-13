/**
 * Hero Animations Module
 * Handles animations for the hero section elements
 */

/**
 * Initialize hero headlines animation
 * Animates the hero headlines into view after page load
 */
export function initHeroAnimations() {
    // Get the hero headlines container
    const headlinesContainer = document.querySelector('.hero-headlines-container');
    if (!headlinesContainer) return;

    // Trigger animation after a small delay to ensure DOM is fully rendered
    setTimeout(() => {
        headlinesContainer.classList.add('animate-in');
    }, 100);
}
