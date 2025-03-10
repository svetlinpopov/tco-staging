/**
 * Initialize mobile menu with improved touch support
 */
function initMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuButton || !mobileMenu) return;

    // Toggle mobile menu
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        mobileMenu.classList.toggle('hidden');
    });

    // Handle touch events for mobile
    menuButton.addEventListener('touchend', function(e) {
        e.preventDefault();
        mobileMenu.classList.toggle('hidden');
    }, { passive: false });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (mobileMenu && !mobileMenu.classList.contains('hidden') &&
            !mobileMenu.contains(e.target) && !menuButton.contains(e.target)) {
            mobileMenu.classList.add('hidden');
        }
    });
}

export { initMobileMenu };
