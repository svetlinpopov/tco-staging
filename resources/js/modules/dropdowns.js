/**
 * Dropdowns Module
 * Handles all dropdown menus consistently
 */

// Animation constants
const FADE_DURATION = 500; // in milliseconds
const VISIBILITY_DELAY = 10; // small delay for visibility change

/**
 * Initialize all dropdown functionality
 */
export function initDropdowns() {
    const dropdownContainers = document.querySelectorAll('.dropdown-container, .language-dropdown-container, .nav-dropdown-container');

    if (!dropdownContainers.length) return;

    // Track currently open dropdown on mobile
    let openDropdown = null;

    dropdownContainers.forEach(container => {
        const trigger = container.querySelector('.dropdown-toggle-label, .btn-lang-selector, .nav-dropdown-trigger');
        const dropdown = container.querySelector('.dropdown-menu, .language-dropdown, .nav-dropdown');

        if (!trigger || !dropdown) return;

        // Check if we're on desktop
        const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

        // Only handle click events on mobile or for specific items
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Skip this logic on desktop for most containers (let CSS handle it)
            if (isDesktop && !container.classList.contains('language-dropdown-container')) {
                return;
            }

            const isVisible = dropdown.style.visibility === 'visible';

            // Handle other open dropdowns
            if (openDropdown && openDropdown !== dropdown) {
                hideDropdown(openDropdown);
            }

            if (isVisible) {
                hideDropdown(dropdown);
                openDropdown = null;
            } else {
                showDropdown(dropdown);
                openDropdown = dropdown;
            }
        });

        // Touch event handling
        if (!isDesktop) {
            trigger.addEventListener('touchend', (e) => {
                e.preventDefault(); // Prevent ghost clicks
            }, { passive: false });
        }
    });

    // Close all dropdowns when clicking elsewhere
    document.addEventListener('click', () => {
        const visibleDropdowns = document.querySelectorAll('.dropdown-menu[style*="visible"], .language-dropdown[style*="visible"], .nav-dropdown[style*="visible"]');

        visibleDropdowns.forEach(dropdown => {
            hideDropdown(dropdown);
        });

        openDropdown = null;
    });
}

/**
 * Show dropdown with animation
 */
function showDropdown(dropdown) {
    dropdown.style.visibility = 'visible';

    // Small delay ensures visibility change takes effect first
    setTimeout(() => {
        dropdown.style.opacity = '1';
    }, VISIBILITY_DELAY);
}

/**
 * Hide dropdown with animation
 */
function hideDropdown(dropdown) {
    dropdown.style.opacity = '0';

    // Wait for fade-out animation to complete
    setTimeout(() => {
        dropdown.style.visibility = 'hidden';
    }, FADE_DURATION);
}
