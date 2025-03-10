/**
 * Navigation Module
 * Handles navigation interactions and mobile menu
 */

/**
 * Initialize navigation link active states and interactions
 */
export function initNavigation() {
    initNavLinks();
    initMobileMenu();
}

/**
 * Initialize navigation links
 */
function initNavLinks() {
    const navLinks = document.querySelectorAll('.nav-item:not(.nav-dropdown-trigger)');

    navLinks.forEach(link => {
        // Mouse events for desktop
        link.addEventListener('mousedown', function() {
            this.classList.add('is-pressed');
        });

        link.addEventListener('mouseup', function() {
            this.classList.remove('is-pressed');
        });

        link.addEventListener('mouseleave', function() {
            this.classList.remove('is-pressed');
        });

        // Touch events for mobile
        link.addEventListener('touchstart', function() {
            this.classList.add('is-pressed');
        }, { passive: true });

        link.addEventListener('touchend', function() {
            this.classList.remove('is-pressed');
        }, { passive: true });
    });
}

/**
 * Initialize mobile menu functionality
 */
function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    if (!menuToggle) return;

    // Mobile menu is controlled via CSS using the checkbox
    // No additional JS needed unless we want to add animations
    // or programmatically control the menu

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        const mobileMenu = document.querySelector('.mobile-menu');
        const toggleBtn = document.querySelector('label[for="mobile-menu-toggle"]');

        if (mobileMenu && menuToggle.checked &&
            !mobileMenu.contains(e.target) &&
            !toggleBtn.contains(e.target)) {
            menuToggle.checked = false;
        }
    });
}
