/**
 * Dropdowns Module
 * Handles all dropdown menus consistently
 */

// Animation constants
const FADE_DURATION = 300; // in milliseconds
const VISIBILITY_DELAY = 10; // small delay for visibility change
const HOVER_DELAY = 100; // delay before showing dropdown on hover
const HIDE_DELAY = 300; // delay before hiding dropdown on mouse leave

/**
 * Initialize all dropdown functionality
 */
export function initDropdowns() {
    const dropdownContainers = document.querySelectorAll('.dropdown-container, .language-dropdown-container, .nav-dropdown-container');

    if (!dropdownContainers.length) return;

    // Track currently open dropdown on mobile
    let openDropdown = null;
    // Store timeout IDs for hover delays
    let hoverTimeouts = {};
    let hideTimeouts = {};

    // Check if we're on desktop
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;

    dropdownContainers.forEach(container => {
        const trigger = container.querySelector('.dropdown-toggle-label, .btn-lang-selector, .nav-dropdown-trigger, .nav-item');
        const dropdown = container.querySelector('.dropdown-menu, .language-dropdown, .nav-dropdown');

        if (!trigger || !dropdown) return;

        if (isDesktop) {
            // Desktop - use hover
            setupDesktopHoverEvents(container, trigger, dropdown, hoverTimeouts, hideTimeouts);
        } else {
            // Mobile - use click events
            setupMobileClickEvents(container, trigger, dropdown, openDropdown);
        }
    });

    // Close all dropdowns when clicking outside on mobile
    if (!isDesktop) {
        document.addEventListener('click', () => {
            const visibleDropdowns = document.querySelectorAll('.dropdown-menu[style*="visible"], .language-dropdown[style*="visible"], .nav-dropdown[style*="visible"]');

            visibleDropdowns.forEach(dropdown => {
                hideDropdown(dropdown);
            });

            openDropdown = null;
        });
    }

    // Handle window resize - reinitialize dropdown behavior
    window.addEventListener('resize', debounce(() => {
        // Clean up existing event listeners
        // Since we can't easily remove anonymous listeners, we'll reinitialize the module
        initDropdowns();
    }, 250));
}

/**
 * Setup desktop hover events for dropdown
 */
function setupDesktopHoverEvents(container, trigger, dropdown, hoverTimeouts, hideTimeouts) {
    const containerId = container.id || generateId();

    // Mouse enter container - show dropdown
    container.addEventListener('mouseenter', () => {
        // Clear any pending hide timeout
        if (hideTimeouts[containerId]) {
            clearTimeout(hideTimeouts[containerId]);
            delete hideTimeouts[containerId];
        }

        // Set delay before showing
        hoverTimeouts[containerId] = setTimeout(() => {
            showDropdown(dropdown);
        }, HOVER_DELAY);
    });

    // Mouse leave container - hide dropdown with delay
    container.addEventListener('mouseleave', () => {
        // Clear any pending show timeout
        if (hoverTimeouts[containerId]) {
            clearTimeout(hoverTimeouts[containerId]);
            delete hoverTimeouts[containerId];
        }

        // Set delay before hiding
        hideTimeouts[containerId] = setTimeout(() => {
            hideDropdown(dropdown);
        }, HIDE_DELAY);
    });

    // Handle touch events for mobile even in desktop mode
    trigger.addEventListener('touchend', (e) => {
        e.preventDefault(); // Prevent ghost clicks
        e.stopPropagation();

        const isVisible = dropdown.style.visibility === 'visible';

        if (isVisible) {
            hideDropdown(dropdown);
        } else {
            showDropdown(dropdown);
        }
    }, { passive: false });
}

/**
 * Setup mobile click events for dropdown
 */
function setupMobileClickEvents(container, trigger, dropdown, openDropdown) {
    // Handle click for mobile
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

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
    trigger.addEventListener('touchend', (e) => {
        e.preventDefault(); // Prevent ghost clicks
    }, { passive: false });
}

/**
 * Show dropdown with animation
 */
function showDropdown(dropdown) {
    // Reset any ongoing transitions
    dropdown.style.transition = `opacity ${FADE_DURATION}ms ease, visibility 0s linear ${VISIBILITY_DELAY}ms`;
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
    // Reset any ongoing transitions
    dropdown.style.transition = `opacity ${FADE_DURATION}ms ease, visibility 0s linear ${FADE_DURATION}ms`;
    dropdown.style.opacity = '0';

    // Wait for fade-out animation to complete
    setTimeout(() => {
        dropdown.style.visibility = 'hidden';
    }, FADE_DURATION);
}

/**
 * Generate a random ID for elements
 */
function generateId() {
    return 'dropdown-' + Math.random().toString(36).substring(2, 9);
}

/**
 * Debounce function to limit frequency of calls
 */
function debounce(func, wait = 20) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
